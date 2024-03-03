import React from 'react'
import png1 from '../assets/png1.png'
export default function Navbar() {
  return (
    <div id="nav" className='flex'>
      <div id="logoandname" className="flex">
      <img src={png1} alt="" />
      <h1>PocketPortal : Pick your favourite Gadgets</h1>
      
      </div>
      {/* <div className='flex'>
        <button>Login/Sign-up</button>
        <button>MyPocket</button>
        <button>About</button>
      </div> */}
    </div>
  )
}
