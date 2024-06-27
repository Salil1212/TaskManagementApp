// import React from "react";
// import "../Task.css"; // Import custom CSS file
// import { Link } from "react-router-dom"; // Import Link

// const Task = ({ task, onDelete }) => {
//   return (
//     <div className="task-card card mb-3">
//       <div className="card-body">
//         <h5 className="card-title">{task.title}</h5>
//         <p className="card-text">{task.description}</p>
//         <p className="card-text">
//           <small className="text-muted">
//             Due Date: {new Date(task.dueDate).toLocaleDateString()}
//           </small>
//         </p>
//         <div className="d-flex justify-content-end">
//           <Link
//             to={`/edit-task/${task._id}`}
//             className="btn btn-outline-primary btn-sm mx-1"
//           >
//             Edit
//           </Link>
//           <button
//             type="button"
//             className="btn btn-outline-danger btn-sm mx-1"
//             onClick={() => onDelete(task._id)}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Task;
import React from "react";
import "../Task.css"; // Import custom CSS file
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"; // Import specific icons

const Task = ({ task, onDelete }) => {
  return (
    <div className="task-card card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <small className="text-muted">
            Due Date: {new Date(task.dueDate).toLocaleDateString()}
          </small>
        </p>
        <div className="d-flex justify-content-end">
          <Link
            to={`/edit-task/${task._id}`}
            className="btn btn-outline-primary btn-sm mx-1"
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm mx-1"
            onClick={() => onDelete(task._id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
