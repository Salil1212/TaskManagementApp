// EditTaskPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditTaskPage = () => {
  const { id } = useParams(); // Get task ID from URL
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await axios.get(`/api/tasks/${id}`);
      setTask(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDueDate(new Date(response.data.dueDate).toISOString().slice(0, 10));
    } catch (error) {
      console.error("Error fetching task: ", error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate };

    try {
      await axios.put(`/api/tasks/${id}`, updatedTask);
      navigate("/"); // Redirect to Task List page
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Edit Task</h2>
      {task ? (
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group d-flex justify-content-end">
            <button type="submit" className="btn btn-success mr-2">
              Save
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <p>Loading task...</p>
      )}
    </div>
  );
};

export default EditTaskPage;
