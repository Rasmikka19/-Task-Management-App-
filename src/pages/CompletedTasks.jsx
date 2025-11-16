import { useState, useEffect } from "react"
import TaskList from "../components/TaskList"

export default function CompletedTasks() {
  const [tasks, setTasks] = useState([])

  // Completed tasks loads froms localstorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || []
    setTasks(stored.filter((t) => t.status === "Completed"))
  }, [])

  // Completed task
  function toggleComplete(id) {
    const stored = JSON.parse(localStorage.getItem("tasks")) || []

    // Change pending
    const updated = stored.map((task) =>
      task.id === id
        ? { ...task, status: "Pending" }
        : task
    )

    localStorage.setItem("tasks", JSON.stringify(updated))
    setTasks(updated.filter((t) => t.status === "Completed"))  // Update only completed tasks in state
  }

  // Delete a completed task
  function deleteTask(id) {
    const stored = JSON.parse(localStorage.getItem("tasks")) || []
    const updated = stored.filter((task) => task.id !== id) // Remove the task

    localStorage.setItem("tasks", JSON.stringify(updated))
    setTasks(updated.filter((t) => t.status === "Completed"))  // Refresh completed tasks list
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">
        Completed Tasks
      </h2>
 
       {/* Completed tasks are shown here */}
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  )
}
