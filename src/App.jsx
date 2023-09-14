import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Registration from "./components/pages/Registration";
import "./assets/css/style.css";

function App() {
  useEffect(() => {
    const userData = [
      {
        username: "SugarRush",
        password: "Type2Diabetes",
      },
      {
        username: "AsmallBaby",
        password: "pass!@#",
      },
    ];
    localStorage.setItem("users", JSON.stringify(userData));
  }, []);

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={ loggedInUser ? (<Navigate to="/" />) : ( <Login setLoggedInUser={setLoggedInUser} />)}/>
        <Route path="/signup" element={ loggedInUser ? (<Navigate to="/" />) : ( <Registration setLoggedInUser={setLoggedInUser} />)}/>
        <Route path="/" element={loggedInUser ? (<Dashboard user={loggedInUser} />) : (<Navigate to="/login" />)}/>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
