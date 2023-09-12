import React, { useState } from 'react'
import InputForm from './common/InputForm';
import { validateUsername, validatePassword } from './common/Helpers';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(username, password);
    console.log(passwordError)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <InputForm
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />

        <InputForm
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button className='bg-sky-500 hover:bg-sky-700 ...'
            type="button"
            onClick={handleSubmit}
          >
            Log In
          </button>
    </form>
    </div>
  )
}

export default Login