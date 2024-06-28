import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import "../TaskList.css"; // Import custom CSS file

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://task-management-app-server-puce.vercel.app/api/tasks/${id}`
      );
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  return (
    <div className="task-list-container container">
      <h2 className="my-4">Task List</h2>
      <div className="row">
        <div className="col-lg-8">
          <Link to="/add-task">
            <button className="btn btn-primary mb-3">Add Task</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {tasks.map((task) => (
          <div key={task._id} className="col-lg-6">
            <Task task={task} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
