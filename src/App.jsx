import React, { useEffect, useState } from 'react'  
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

  const [currentPage, setCurrentPage] = useState('login')
  const [loggedInUser, setLoggedInUser] = useState(null)
  console.log(loggedInUser)
  
  return (
    <>
      <Login />
    </>
  )
}

export default App
