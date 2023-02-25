import { useState } from "react"

const ComplexForm = (props) => {
  const [ leftFormData, setLeftFormData ] = useState({name: "", email: "", password: ""})
  const [ rightFormData, setRightFormData ] = useState({name: "", email: "", password: ""})

  const handleLeftFormInput = (e) => {
    switch(e.target.name){
      case "name":
        setLeftFormData({...leftFormData, name: e.target.value})
        break; 

      case "email":
        setLeftFormData({...leftFormData, email: e.target.value})
        break; 

      case "password":
        setLeftFormData({...leftFormData, password: e.target.value})
        break; 

      default:
    }
  }

  const handleRightFormInput = (e) => {
    setRightFormData({...rightFormData, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1>Complex Form</h1>
      <p>Below are two forms. The form on the left handles state data in a "simpler" way that requires more code. The 
      form on the right has a more "industry standard" approach. Check the code to see the differences.</p>

      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }} className="px-5">

        {/* ============ left side ==========================  */}

        <div style={{ width: "45%" }}>
          <form>
            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="Jane Doe" 
                value={leftFormData.name} 
                onChange={handleLeftFormInput}
              />
            </div>

            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="text" 
                name="email"
                className="form-control" 
                placeholder="jndoe@gmail.com" 
                value={leftFormData.email} 
                onChange={handleLeftFormInput}
              />
            </div>

            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                name="password"
                className="form-control" 
                value={leftFormData.password} 
                onChange={handleLeftFormInput}
              />
            </div>
          </form>
        </div>


         {/* ============== right side ===================== */}

        <div style={{ width: "45%" }}>
          <form>
            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="John Doe" 
                value={rightFormData.name} 
                onChange={handleRightFormInput}
              />
            </div>

            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="text" 
                name="email"
                className="form-control" 
                placeholder="jodoe@gmail.com" 
                value={rightFormData.email} 
                onChange={handleRightFormInput}
              />
            </div>

            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                name="password"
                className="form-control" 
                value={rightFormData.password} 
                onChange={handleRightFormInput}
              />
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default ComplexForm