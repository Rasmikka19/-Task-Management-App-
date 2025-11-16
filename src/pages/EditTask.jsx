import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import useTaskForm from "../hooks/useTaskForm"

export default function EditTask() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { values, setValues, errors, handleChange, validate } = useTaskForm({
    title: "",
    description: "",
    status: "Pending",
    deadline: "",
    priority: "Medium",
  })

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || []
    const task = stored.find((t) => t.id === id)

    if (task) {
      setValues(task)
    }
  }, [id, setValues])

  function update() {
    if (!validate()) return

    const stored = JSON.parse(localStorage.getItem("tasks")) || []
    const updated = stored.map((t) => (t.id === id ? values : t))

    localStorage.setItem("tasks", JSON.stringify(updated))

    navigate("/tasks")
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Edit Task</h2>

      <div className="flex flex-col gap-4">
        <input
          name="title"
          placeholder="Task Title"
          className="border p-2 rounded"
          value={values.title}
          onChange={handleChange}
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}

        <textarea
          name="description"
          placeholder="Description"
          className="border p-2 rounded"
          value={values.description}
          onChange={handleChange}
        />

        <label className="text-sm font-semibold">Deadline</label>
        <input
          type="date"
          name="deadline"
          className="border p-2 rounded"
          value={values.deadline}
          onChange={handleChange}
        />
        {errors.deadline && <p className="text-red-500">{errors.deadline}</p>}

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

        <select
          name="status"
          className="border p-2 rounded"
          value={values.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <button
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          onClick={update}
        >
          Update Task
        </button>
      </div>
    </div>
  )
}
