import React, { useState } from "react";
import InputForm from '../common/InputForm';
import {  useNavigate } from 'react-router-dom';
import {  validateRules } from '../common/Helpers';

const Registration = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateRules(username, password, confirmpassword);
    const msg = validation.msg;
    setMessage(msg);
    if(validation.status === 1) {
      // Display a success prompt
      const registrationSuccess = window.confirm('User registered successfully. Click OK to return to the login page.');
      if (registrationSuccess) {
        navigate('/login');
      }
    }
    
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <InputForm
          id='username'
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />

        <InputForm
          id='password'
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <InputForm
          id='confrmpassword'
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={handleConfirmPasswordChange}
        />

        <button
          className="bg-sky-500 hover:bg-sky-700 ..."
          type="button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <br />
        {message && <small className="text-red-700">{message}</small>}
      </form>
    </div>
  );
};

export default Registration;
