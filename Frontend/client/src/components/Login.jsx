import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [Password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit =  (e) => {
    e.preventDefault();
  };

  return (
    <div id="LoginContainer">
      <div >
      <form id="Login" onSubmit={handleFormSubmit}>
      <h2>Login</h2>
        <div>
          <input type="text"placeholder='Username...' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <br/>
        <div>
          <input placeholder='Password...' type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br />
        <div className='flex'>
        <button id="" type="submit">Login</button>
        <button id="addentitybtn" onClick={()=>{navigate('/')}} type="submit">Signup</button>

        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
