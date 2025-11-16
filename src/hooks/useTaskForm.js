import { useState } from "react"

// handling the form in AddTask and EditTask pages
export default function useTaskForm(initialValues) {
  
  // sorting inputs
  const [values, setValues] = useState(initialValues)
  
  // Storing validation errors
  const [errors, setErrors] = useState({})

  // Runs whenever the input fields change
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value }) // update only the changed field
  }

  // checks the required fields are filled
  function validate() {
    let err = {}

    // Title must not be empty
    if (!values.title.trim()) err.title = "Title is required."
    
    // Deadline must be selected
    if (!values.deadline) err.deadline = "Deadline is required."

     // Save all errors
    setErrors(err)
    return Object.keys(err).length === 0
  }

   // Return everything needed for the form
  return { values, errors, handleChange, validate, setValues }
}
