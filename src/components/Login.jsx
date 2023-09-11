import React, { useState } from 'react'
import InputForm from './common/InputForm';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
      <form>
        <InputForm
          label='Email'
          type ='text'
          value = {username}
        />

        <InputForm
          label='Password'
          type ='password'
          value = {password}
        />
    </form>
    
  )
}

export default Login