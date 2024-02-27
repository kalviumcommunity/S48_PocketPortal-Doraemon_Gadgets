import React from 'react'
import timemachine from '../assets/timemachine.jpg'

export default function GadgetOfTheDay() {
  return (
            <div id="gadgetBox">
        <div>
          <h3> Gadget of the day </h3>
          <img id="gadgetimg" src={timemachine} alt="" />
           <h3>Time Machine</h3>

           <div id="gadgetInfo">
             Description:<h3>Atime machine that enables time travel to the past or future</h3>
             Category:<h3>Time-related and Transportation</h3>
                <div id="actions">
                   <button>Add to MyPocket</button>
                </div>
            </div>
          </div>
      </div>
  )
}
