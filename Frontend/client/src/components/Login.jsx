import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  const handleFormSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('https://pocketportal-doraemon-gadgets-2.onrender.com/api/login',{username,password,});
      if(response.data.success){
        setCookie('username', username, 1);
        navigate('/Gadgets');
        setCookie('acessToken',response.data.accessToken)
        // console.log(document.cookie)
      }else{
        console.error('Login failed:',response.data.message);
      }
    } catch(error){
      console.error('Error during login:', error.message);
    }
  };


  return (
    <div id="LoginContainer">
      <div >
      <form id="Login" onSubmit={handleFormSubmit}>
      <h2>Login</h2>
        <div>
          <input type="text"placeholder='Username...' value={username} onChange={(e) => setName(e.target.value)} required />
        </div>
        <br/>
        <div>
          <input placeholder='Password...' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
