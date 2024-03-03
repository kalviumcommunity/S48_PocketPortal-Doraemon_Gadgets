import React from 'react'
import bg from '../assets/bg.png'

export default function HomePage() {
  return (
    <div id="Homepage">
        <button>Login/Sign-up</button>
        <button>MyPocket</button>
        <img src={bg} id="bg1" alt="" />
    </div>
  )
}
