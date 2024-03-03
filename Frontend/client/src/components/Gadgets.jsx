import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './components.css'
import Navbar from './Navbar'

 function Gadgets() {
  const [gadgets,setGadgets]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/getGadgets")
    .then(
      users=>{console.log(users.data)
        setGadgets(users.data)}
    )
    .catch(err=>
      console.log(err)
    )
  },[])
  console.log(gadgets)

  return (
    <div>
      <Navbar/>
      <div id="gadgetsgrid">
      {gadgets.map(
        (gadget)=>(
          <div id="gadgetEntity" key={gadget.id}>
            <h2>{gadget.name}</h2>
            <div id="imgdiv"></div>
            <p>{gadget.description}</p>
            <p>{gadget.category}</p>
            <p>{gadget.ratings}</p>
       </div>
        )
      )}
    </div>
    </div>
  )
}

export default Gadgets