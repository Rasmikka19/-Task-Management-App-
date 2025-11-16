import { useEffect, useState } from "react"
import TaskList from "../components/TaskList"
import Pagination from "../components/Pagination"

export default function TaskPage() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("name")
  const [page, setPage] = useState(1)

  const perPage = 5

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  // Reset pagination when filter/search/sort changes
  useEffect(() => {
    setPage(1);
  }, [filter, search, sort])


  // Sorting
  function sortTasks(list) {
    return [...list].sort((a, b) => {
      if (sort === "name") return a.title.localeCompare(b.title)

      if (sort === "deadline")
        return new Date(a.deadline) - new Date(b.deadline)

      if (sort === "priority") {
        const order = { High: 1, Medium: 2, Low: 3 }
        return order[a.priority] - order[b.priority]
      }

      if (sort === "status") return a.status.localeCompare(b.status)

      return 0
    })
  }

  const displayed = sortTasks(
    tasks
      .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
      .filter((t) => (filter === "All" ? true : t.status === filter))
  )

  const paginated = displayed.slice((page - 1) * perPage, page * perPage)


  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }


  return (
    <div className="bg-white p-6 rounded-lg shadow">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-purple-700">Task List</h2>

       <div className="flex flex-wrap gap-3 w-full md:w-auto">

          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-1 rounded w-full md:w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border px-3 py-1 rounded w-full md:w-auto"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="deadline">Sort by Deadline</option>
            <option value="priority">Sort by Priority</option>
            <option value="status">Sort by Status</option>
          </select>

          <select
            className="border px-3 py-1 rounded w-full md:w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <TaskList
        tasks={paginated}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />

      <div className="mt-5 flex justify-center">
        <Pagination
          total={displayed.length}
          perPage={perPage}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}
