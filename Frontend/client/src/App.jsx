import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import pocket from './assets/images.png'
function App() {

  return (
    <>
    <Navbar/>
    <div id="welcomepage">
     <h1>Welcome to pocket portal </h1>
     <p>Pick your favourite Gadgets and add it to your pocket</p>
    </div>
    <img id="pocket" src={pocket} alt="" />
    </>
  )
}

export default App
