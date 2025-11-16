import { Link } from "react-router-dom"

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="mt-5">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 py-5">No tasks found.</p>
      ) : (

        // scrollable on small screens
        <div className="overflow-x-auto">

          {/* table */}
          <table className="w-full border border-gray-300 rounded-lg">
           
           {/* Table Header */}
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Deadline</th>
                <th className="py-3 px-4 text-left">Priority</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Complete</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

             {/* Table Body */}
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-50">
                
                  {/* Title */}
                  <td className="py-3 px-4 font-semibold text-gray-800">
                    {task.title}
                  </td>

                  {/* Deadline */}
                  <td className="py-3 px-4 text-gray-600">{task.deadline}</td>

                  {/* Priority */}
                  <td className="py-3 px-4 text-gray-600">{task.priority}</td>

                  {/* Status */}
                  <td
                    className={`py-3 px-4 font-semibold ${
                      task.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {task.status}
                  </td>

                  {/* Checkbox */}
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      checked={task.status === "Completed"}
                      onChange={() => toggleComplete(task.id)}
                      className="w-5 h-5 accent-purple-600"
                    />
                  </td>

                  {/* Edit + Delete */}
                  <td className="py-3 px-4 flex gap-3">
                    <Link
                      to={`/edit/${task.id}`}
                      className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
