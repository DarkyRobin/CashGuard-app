import React, { useState } from "react";
import { InputField, Button } from '../components/InputForm';
import {  useNavigate } from 'react-router-dom';
import {  validateRules } from '../modules/Authentication';
import { v4 as uuidv4 } from 'uuid';

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
    const validation = validateRules(username, password, confirmpassword, uuidv4());
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
        <InputField
          id='username'
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />

        <InputField
          id='password'
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <InputField
          id='confrmpassword'
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={handleConfirmPasswordChange}
        />

        <Button onClick={handleSubmit} id="signup" label="Sign Up" />
        <br />
        {message && <small className="text-red-700">{message}</small>}
      </form>
    </div>
  );
};

export default Registration;
