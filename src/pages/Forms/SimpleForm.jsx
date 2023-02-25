import { useState } from "react"



const SimpleForm = (props) => {
  const [ username, setUsername ] = useState("")

  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <>
      <h1>Simple Form</h1>
      <p>Here is a very simple form showing the basic implementation of useState().</p>

      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Enter your username</label>
          <input 
            type="text" 
            name="username"
            className="form-control" 
            placeholder="tequilaforoever" 
            value={username} 
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
  )
}

export default SimpleForm