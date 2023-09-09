import React from 'react'

const Login = () => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" name="Uspaswordername" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="button" id='submit'>Login</button>
      <p><a href="">Forgot password?</a></p>
    </form>
  )
}

export default Login