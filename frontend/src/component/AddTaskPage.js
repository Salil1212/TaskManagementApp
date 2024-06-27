import React from "react";
import AddListForm from "./AddListForm"; // Import AddListForm
import { useNavigate } from "react-router-dom";

const AddTaskPage = () => {
  const navigate = useNavigate();

  const handleAddTask = (newTask) => {
    // You can handle adding the task here if needed
    navigate("/"); // Redirect to Task List page
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to Task List page
  };

  return (
    <div className="container">
      <h2 className="my-4">Add New Task</h2>
      <AddListForm onAddTask={handleAddTask} onCancel={handleCancel} />
    </div>
  );
};

export default AddTaskPage;
