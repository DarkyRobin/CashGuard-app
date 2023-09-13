import React, { useState } from 'react'
import InputForm from './common/InputForm';
import {  validateAccount } from './common/Helpers';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {setCurrentPage, setLoggedInUser} = props;
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateAccount(username, password);
    const msg = validation.msg;
    setMessage(msg)
    console.log(validation.status);
    if(validation.status === 1) {
      setLoggedInUser(username);
      setCurrentPage('dashboard');
    }
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
          {message && (<small className="text-red-700">{message}</small>)}
    </form>
    </div>
  )
}

export default Login