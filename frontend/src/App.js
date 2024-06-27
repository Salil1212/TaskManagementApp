// import React from "react";
// import TaskList from "./component/TaskList";
// import "./App.css"; // Import global CSS file

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Task Management Application</h1>
//       </header>
//       <main>
//         <div className="container">
//           <TaskList />
//         </div>
//       </main>
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 Task Management App. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
// import TaskList from "./component/TaskList";
// import AddTaskPage from "./component/AddTaskPage"; // Import the new AddTaskPage component
// import "./App.css"; // Import global CSS file

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Task Management Application</h1>
//         </header>
//         <main>
//           <div className="container">
//             <Routes>
//               <Route path="/" element={<TaskList />} />
//               <Route path="/add-task" element={<AddTaskPage />} />
//             </Routes>
//           </div>
//         </main>
//         <footer className="footer">
//           <div className="container">
//             <p>&copy; 2024 Task Management App. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./component/TaskList";
import AddTaskPage from "./component/AddTaskPage";
import EditTaskPage from "./component/EditTaskPage"; // Import the new EditTaskPage component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Task Management Application</h1>
        </header>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add-task" element={<AddTaskPage />} />
              <Route path="/edit-task/:id" element={<EditTaskPage />} />{" "}
              {/* Add route for EditTaskPage */}
            </Routes>
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Task Management App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
