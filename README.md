📝 Task Management App (React + Tailwind CSS)

A fully functional Task Management Application built with React JS, showcasing intermediate-level concepts like React Router, custom hooks, form handling, tables, pagination, and localStorage data management.

This project is perfect for practicing real-world React patterns used in production apps.

🚀 Features
🔹 Routing (React Router DOM)

Home Page – Displays all tasks in a table.

Add Task Page – Create new tasks using a validated form.

Edit Task Page – Update existing tasks.

Task Details Page – View individual task details.

Completed Tasks Page – Filtered list of completed tasks.

🔹 Form Handling

Reusable form logic through a custom hook: useTaskForm.js

Input validation & clean state management.

Used for both creating and editing tasks.

🔹 Data Management

Tasks stored in localStorage to persist data.

State updates handled through React hooks.

🔹 Task Table with Utilities

TaskList.jsx displays tasks in a structured table.

Sorting and filtering options can be applied.

Row actions: Edit, Delete, Mark as Complete.

🔹 Pagination & Search

Pagination.jsx handles client-side pagination.

Search bar to quickly find tasks by title or description.

📂 Project Structure
src/
 ├── components/
 │     ├── Pagination.jsx
 │     └── TaskList.jsx
 │
 ├── hooks/
 │     └── useTaskForm.js
 │
 ├── pages/
 │     ├── HomePage.jsx
 │     ├── TaskPage.jsx
 │     ├── AddTask.jsx
 │     ├── EditTask.jsx
 │     └── CompletedTasks.jsx
 │
 ├── App.jsx
 └── main.jsx

🛠 Tech Stack

React JS

React Router DOM

Tailwind CSS

LocalStorage for persistence

Custom Hooks for form management

🎯 Outcome

This project demonstrates:

Effective routing structure

Clean form handling with reusable logic

Real-world table rendering with pagination and search

Managing tasks using localStorage

A polished UI with Tailwind CSS
