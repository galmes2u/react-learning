




const LoginButton3 = ({isLoggedIn, setIsLoggedIn}) => {

  return (
    <button 
      className="btn btn-outline-light" 
      type="submit"
      onClick={() => setIsLoggedIn(!isLoggedIn)}
    >
      { isLoggedIn ? "Logout 3" : "Log In 3" } 
    </button>
  )
}

export default LoginButton3