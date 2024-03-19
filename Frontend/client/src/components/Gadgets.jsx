import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState,useEffect } from 'react'
import './components.css'
import Navbar from './Navbar'
import png1 from '../assets/png1.png'
import Dlogo from '../assets/Dlogo.png'

 function Gadgets() {
  const [gadgets,setGadgets]=useState([])
  const [users,setUsers] = useState([])
  const navigate = useNavigate();
  // console.log(document.cookie)
  useEffect(()=>{
    axios.get("http://localhost:8000/api/getGadgets")
    .then(
      users=>{
        // console.log(users.data)
        setGadgets(users.data)}
    )
    .catch(err=>
      console.log(err)
    )
  },[])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/getUsers")
    .then(
      users=>{
        setUsers(users.data)}
    )
    .catch(err=>
      console.log(err)
    )
  },[])

  const handleAddGadgetClick = ()=>{
    navigate('/addEntity');
  };

  const handleUpdateGadgetClick = (id) => {
    navigate(`/updateEntity/${id}`);
  };

  const handleDeleteGadgetClick = (id)=>{
    axios.delete('http://localhost:8000/api/deleteGadget/'+id)
    .then((res)=>{
    window.location.reload()
    console.log(res)
  })
    .catch((err)=>{console.log(err)})
  }

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  const handleLogout = () => {
    document.cookie = 'username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    document.cookie = 'acessToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    navigate('/login');
    document.cookie? console.log(document.cookie):console.log("No cookies found")
  };
  const username=getCookie('username')
  const [selectedValue , setSelectedvalue] = useState(username)
  const handleSelectChange=(e)=>{
    setSelectedvalue(e.target.value)
  }
  return (
    <div>
      <div id="nav" className='flex'>
      <div id="logoandname" className="flex">
      <img src={Dlogo} id="Dlogo" alt="" />
      <img src={png1} id="Dimg" alt="" />
      <h1>PocketPortal : Pick your favourite Gadgets</h1>  
      </div>
      <div className='flex'>
        <select  value={selectedValue} onChange={handleSelectChange}>
          {users.map((user,i)=>(
            <option key={i} value={user.username}>{user.username}</option>
          ))}
        </select>
      <button onClick={handleAddGadgetClick}>Add Gadget</button>
      <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
      <div id="gadgetsgrid">
      {gadgets.filter(item=>item.createdby==selectedValue).map(
        (gadget,i)=>(
          <div id="gadgetEntity" key={i}>
            <h2>{gadget.name}</h2>
            <div  id="imgdiv">
              <img  src={gadget.image} alt="" />
            </div>
            {/* <p>{gadget._id}</p> */}
            <p>{gadget.description}</p>
            <p>{gadget.category}</p>
            <p>{gadget.ratings}</p>
            <div id="actions" className="flex">
              <button onClick={(e)=>handleUpdateGadgetClick(gadget._id)}>Edit</button>
              <button onClick={(e)=>handleDeleteGadgetClick(gadget._id)}>Delete</button>
            </div>
       </div>
        )
      )}
    </div>
    <div  id="footer">
        <p>Added by {username}</p>
      </div>
    </div>
  )
}

export default Gadgets