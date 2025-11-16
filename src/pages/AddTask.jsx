import { useNavigate } from "react-router-dom"
import useTaskForm from "../hooks/useTaskForm"

export default function AddTask() {
  const navigate = useNavigate()

  // use custome hook to mamage the inputs & errors
  const { values, errors, handleChange, validate } = useTaskForm({
    title: "",
    description: "",
    status: "Pending",
    deadline: "",
    priority: "Medium",
  })

  function submit() {
    if (!validate()) return;

    const newTask = {
      id: crypto.randomUUID(),
      ...values,
    }

     // Getting existing tasks from localStorage
    const existing = JSON.parse(localStorage.getItem("tasks")) || []
    
    // Adding the new task to the previous ones
    localStorage.setItem("tasks", JSON.stringify([...existing, newTask]))

    // Redirect to task list page
    navigate("/tasks")
  }

  return (
    
    <div className="bg-white p-6 rounded shadow">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Add Task</h2>

      {/* Task Title Input */}
      <div className="flex flex-col gap-4">
        <input
          name="title"
          placeholder="Task Title"
          className="border p-2 rounded"
          value={values.title}
          onChange={handleChange}
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          className="border p-2 rounded"
          value={values.description}
          onChange={handleChange}
        />

        {/* Deadline */}
        <label className="text-sm font-semibold">Deadline</label>
        <input
          type="date"
          name="deadline"
          className="border p-2 rounded"
          value={values.deadline}
          onChange={handleChange}
        />
        {errors.deadline && <p className="text-red-500">{errors.deadline}</p>}

       {/* Priority */}
        <label className="text-sm font-semibold">Priority</label>
        <select
          name="priority"
          className="border p-2 rounded"
          value={values.priority}
          onChange={handleChange}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

       {/* Save Button */}
        <button
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          onClick={submit}
        >
          Save Task
        </button>
      </div>
    </div>
  )
}
