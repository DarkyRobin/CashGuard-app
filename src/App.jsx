import React, { useEffect } from 'react'  
import Login from './components/Login'
import './assets/css/style.css'

function App() {
  useEffect(() => {
    const userData = [
      {
        username:'SugarRush', 
        password:'Type2Diabetes'
      },
      {
        username: 'AsmallBaby',
        password: 'pass!@#'
      }
  ];
    localStorage.setItem('user', JSON.stringify(userData))
  },[])

  
  return (
    <>
      <Login />
    </>
  )
}

export default App
