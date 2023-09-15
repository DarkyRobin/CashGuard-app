import React, { useState } from 'react'

const Dashboard = (props) => {
  const { user } = props
  
  return (
    <>
      <h1>Welcome, {user} </h1>
    </>
  )
}

export default Dashboard
