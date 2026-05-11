import { useState } from 'react'

const Login = () => {
    const [ showLogin, setShowLogin ] = useState(false)
    return (
        <>
      <button onClick={LoginToggle}>Login</button>
      { showLogin && <LoginToggle onClose={() => setShowLogin(false)} />}
        </>
    )
}

export default Login