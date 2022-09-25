import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Rokyt");
  const [lastName, setLastName] = useState("101");
  const [formData, setFormData] = useState([])
  const [error, setError] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()

    if(firstName.length > 1) {
      const newSubmit = { firstName, lastName}
      const submitList = [...formData, newSubmit]
      setFormData(submitList)
      setFirstName('')
      setLastName('')
      setError([])
    } else {
      setError(["First name is required!"])
    }
  }

  const allSubmissions = formData.map(submission => {
    return (
      <div key={submission.firstName}>
        {submission.firstName} {submission.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {error.length > 0
      ? error.map((eachError) => (
          <p key={eachError} style={{ color: "red" }}>
            {eachError}
          </p>
        ))
      : null}
      <h3>Sumissions</h3>
      {allSubmissions}
    </div>
  );
}

export default Form;
