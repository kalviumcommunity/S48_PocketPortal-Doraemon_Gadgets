import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import pocket from './assets/images.png'
import GadgetOfTheDay from './components/GadgetOfTheDay'
function App() {

  return (
    <>
    <Navbar/>
    <h1 id="welcomeh1">Welcome to pocket portal </h1>
    <p>Pick your favourite Gadgets and add it to your pocket</p>
    <div id="welcomepage" className='flex'>
      <GadgetOfTheDay/>
      <div>
         <img id="pocket" src={pocket} alt="" />
     </div>
    </div>

    </>
  )
}

export default App
