import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-purple-700 mb-4">
                Welcome to Task Manager
            </h1>

            <p className="text-gray-600 text-lg mb-6">
                Click the button below to add a new task.
            </p>
            <Link
                to="/add-task"
                className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800"
            >
                Add Task
            </Link>

        </div>
    )
}
