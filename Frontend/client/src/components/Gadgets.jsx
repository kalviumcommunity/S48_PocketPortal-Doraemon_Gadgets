import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState,useEffect } from 'react'
import './components.css'
import Navbar from './Navbar'
import png1 from '../assets/png1.png'

 function Gadgets() {
  const [gadgets,setGadgets]=useState([])
  const navigate = useNavigate();
  console.log(document.cookie)
  useEffect(()=>{
    axios.get("http://localhost:8000/api/getGadgets")
    .then(
      users=>{console.log(users.data)
        setGadgets(users.data)}
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


  const handleLogout = () => {
    document.cookie = 'username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    document.cookie = 'acessToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';

    navigate('/login');
    document.cookie? console.log(document.cookie):console.log("No cookies found")
  };



  return (
    <div>
      <div id="nav" className='flex'>
      <div id="logoandname" className="flex">
      <img src={png1} alt="" />
      <h1>PocketPortal : Pick your favourite Gadgets</h1>  
      </div>
      <div className='flex'>
      <button onClick={handleAddGadgetClick}>Add Gadget</button>
      <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
      <div id="gadgetsgrid">
      {gadgets.map(
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
    </div>
  )
}

export default Gadgets