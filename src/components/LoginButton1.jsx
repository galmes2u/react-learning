


const LoginButton1 = ({isLoggedIn, setIsLoggedIn}) => {
  
  return (
    <>
      { isLoggedIn === false && (
        <button className="btn btn-outline-light" type="submit" onClick={() => setIsLoggedIn(true)}>Log In 1</button>
      )}

      { isLoggedIn === true && (
        <button className="btn btn-outline-light" type="submit" onClick={() => setIsLoggedIn(false)}>Log Out 1</button>
      )}
    </>
  )
}

export default LoginButton1