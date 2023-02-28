import { useState } from "react"
import { ApiPage, MapPage, SimpleForm, ComplexForm } from "./pages";
import { Header, Wrapper } from "./components";

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ activeLoginBtn, setActiveLoginBtn ] = useState(1)

  const page = window.location.href.split("3000/")[1]

  return (
    <Wrapper>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} activeLoginBtn={activeLoginBtn} />

      <div style={{ padding: "1rem"}}>

        { page === "" && (
          <>
            <h1>Home Page</h1>

            <p>The menu items above will take you to different pages showing the things we've discussed so 
            far.</p>

            <p>I've also prepared three different versions of the Login/Logout button, one for each of 
            the implementions we discussed. Below you can choose which version you want to implement 
            above. They look the same, but each references a different component.</p>
            
            <div className="btn-group" role="group" aria-label="Login button options">
              <button type="button" onClick={()=>setActiveLoginBtn(1)} className={`btn btn-${activeLoginBtn === 1 ? "success" : "secondary"}`}>Login 1</button>
              <button type="button" onClick={()=>setActiveLoginBtn(2)} className={`btn btn-${activeLoginBtn === 2 ? "success" : "secondary"}`}>Login 2</button>
              <button type="button" onClick={()=>setActiveLoginBtn(3)} className={`btn btn-${activeLoginBtn === 3 ? "success" : "secondary"}`}>Login 3</button>
            </div>
          </>

        )}

        { page === "api" && <ApiPage /> }
        { page === "map" && <MapPage /> }
        { page === "simple-form" && <SimpleForm /> }
        { page === "complex-form" && <ComplexForm /> }
        

      </div>
    </Wrapper>
  )
}

export default App;
