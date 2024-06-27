import React, { useState } from "react";
import axios from "axios";

const AddListForm = ({ onAddTask, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate };

    try {
      const response = await axios.post("/api/tasks", newTask);
      onAddTask(response.data); // Update frontend task list
      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Add New Task</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label>
            <textarea
              className="form-control"
              id="descriptionInput"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="dueDateInput">Due Date</label>
            <input
              type="date"
              className="form-control"
              id="dueDateInput"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group d-flex justify-content-end">
            <button type="submit" className="btn btn-primary mr-2">
              Add
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListForm;
