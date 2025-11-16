import { Routes, Route, Link, Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TaskPage from "./pages/TaskPage"
import AddTask from "./pages/AddTask"
import EditTask from "./pages/EditTask"
import CompletedTasks from "./pages/CompletedTasks"


function App() {
  const location = useLocation()

  // Hide header on homepage
  const hideHeader = location.pathname === "/"

  // Hide add task button from edit,addtask,completed pages
  const showAddTaskButton = location.pathname === "/tasks"


  return (
    <div className="p-4 sm:p-8">
      {!hideHeader && (
        <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-purple-700 text-center md:text-left">Task Manager</h1>

          {/* Navigation */}
          <nav className="flex gap-4 justify-center flex-wrap md:justify-start">
            <Link to="/" className="text-purple-700 hover:underline" >
              Home
            </Link>
            <Link to="/tasks" className="text-purple-700 hover:underline">
              Tasks
            </Link>
            <Link to="/completed" className="text-purple-700 hover:underline">
              Completed
            </Link>
          </nav>

          {/* Add task button */}
          <div className="flex justify-center md:justify-end">
            {showAddTaskButton && (
              <Link
                to="/add-task"
                className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700"
              >
                + Add Task
              </Link>
            )}

          </div>
        </div>
      )}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/completed" element={<CompletedTasks />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>

  )
}

export default App
