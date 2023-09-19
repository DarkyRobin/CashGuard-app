import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputField, Button } from "../components/InputForm";
import { validateAccount } from "../modules/Authentication";
import "../assets/css/style.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setLoggedInUser } = props;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateAccount(username, password);
    const msg = validation.msg;
    setMessage(msg);
    if (validation.status === 1) {
      const user = { username:username, uuid:validation.uuid }
      setLoggedInUser(user);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <h1 className="text-center align-middle">Login</h1>
        <InputField
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />

        <InputField
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button onClick={handleSubmit} id="login" label="Login" />
        <br />
        {message && <small className="text-red-700">{message}</small>}
        <div>
          <small>
            Don't have any account yet?<Link to="/signup">Sign Up</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Login;
