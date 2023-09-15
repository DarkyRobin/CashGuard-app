import React, { useState } from 'react'

const Header = (props) => {
  const { user } = props
  
  return (
    <>
      <h1>Welcome, {user} </h1>
    </>
  )
}

export default Header