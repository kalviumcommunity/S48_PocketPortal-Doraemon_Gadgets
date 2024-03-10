import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/addUser',
     {username,password})
     .then(result => {
      console.log(result)
      navigate('/Gadgets');
      alert('Signed up successfully!');
    })
     .catch(error=>console.error('Error adding entity:',error))
  };

  return (
    <div id="SignupContainer">
      <div >
      <form id="Signup" onSubmit={handleFormSubmit}>
      <h2>Signup</h2>
        <div>
          <input type="text"placeholder='Userusername...' value={username} onChange={(e) => setusername(e.target.value)}  />
        </div>
        <br/>
        <div>
          <input placeholder='password...' type="password" value={password} onChange={(e) => setpassword(e.target.value)}  />
        </div>
        <br />
        <div className='flex'>
        <button id="" type="submit">Signup</button>
        <button id="addentitybtn" onClick={()=>{navigate('/login')}} type="submit">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Signup;
