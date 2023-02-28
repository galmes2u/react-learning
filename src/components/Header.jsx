import { useState } from "react"
import { LoginButton1, LoginButton2, LoginButton3 } from '.';

const Header = ({isLoggedIn, setIsLoggedIn, activeLoginBtn}) => {
  const [ showDropDown, setShowDropDown ] = useState(false)

  return (
    <header style={{ borderBottom: "1px solid #333" }}>
      <nav className="navbar navbar-dark navbar-expand-md bg-body-secondary" data-bs-theme="dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="##">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/map">Array Map</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/api">Api Page</a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="##" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded={showDropDown}
                  onClick={() => setShowDropDown(!showDropDown)}
                >
                  Form Examples
                </a>
                <ul className={ !showDropDown ? "dropdown-menu" : "dropdown-menu show" }>
                  <li><a className="dropdown-item" href="/simple-form">Simple Form</a></li>
                  <li><a className="dropdown-item" href="/complex-form">Complex Form</a></li>
                </ul>
              </li>
            </ul>

            <div className="d-flex">
              { activeLoginBtn === 1 && <LoginButton1 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
              { activeLoginBtn === 2 && <LoginButton2 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
              { activeLoginBtn === 3 && <LoginButton3 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header