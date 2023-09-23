import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import "./assets/css/style.css";

function App() {
  useEffect(() => {
    const userData = [
      {
        uuid: "a0b1b08f-03c0-4892-9256-5a85d333bd9c",
        username: "SugarRush",
        password: "Type2Diabetes",
      },
      {
        uuid: "08320b4f-2f50-401b-a489-1d0e97a9d03c",
        username: "AsmallBaby",
        password: "pass!@#",
      },
    ];
    localStorage.setItem("users", JSON.stringify(userData));

    const accounts = [
      {
        id: 1,
        uuid: "a0b1b08f-03c0-4892-9256-5a85d333bd9c",
        balance: 1000,
        status: 'Active'
      },
      {
        id: 2,
        uuid: "08320b4f-2f50-401b-a489-1d0e97a9d03c",
        balance: 2000,
        status: 'Active'
      }
    ];
    
    localStorage.setItem("accounts", JSON.stringify(accounts));

    const transactions = [
      {
        id: 1,
        account_id: 1,
        uuid:' a0b1b08f-03c0-4892-9256-5a85d333bd9c',
        transaction_type: 'deposit',
        description: 'Send cash to Ranchodas',
        amount: 100,
        date: '09-20-2023',
        time: '11:02 AM'
      }
    ];
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, []);

  const [loggedInUser, setLoggedInUser] = useState({username:null, uuid:null});
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ loggedInUser.username ? (<Navigate to="/" />) : ( <Login setLoggedInUser={setLoggedInUser} />)}/>
        <Route path="/signup" element={ loggedInUser.username ? (<Navigate to="/" />) : ( <Registration setLoggedInUser={setLoggedInUser} />)}/>
        <Route path="/" element={loggedInUser.username ? (<Dashboard user={loggedInUser.username} uuid={loggedInUser.uuid} />) : (<Navigate to="/login" />)}/>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
