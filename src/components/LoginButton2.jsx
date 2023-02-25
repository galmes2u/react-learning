


const LoginButton2 = ({isLoggedIn, setIsLoggedIn}) => {

  return (
    <>
      { isLoggedIn === false ? (
        <button className="btn btn-outline-light" type="submit" onClick={() => setIsLoggedIn(true)}>Log In 2</button>
      ) : ( 
        <button className="btn btn-outline-light" type="submit" onClick={() => setIsLoggedIn(false)}>Log Out 2</button>
      )}
    </>
  )
}

export default LoginButton2