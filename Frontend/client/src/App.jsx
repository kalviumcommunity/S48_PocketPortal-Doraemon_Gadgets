import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Gadgets from './components/Gadgets';
import AddGadgetForm from './components/AddGadgetForm';
import UpdateGadgetForm from './components/UpdateGadgetForm';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
      <>
        <Routes>
          <Route path="https://main--pocketportal.netlify.app/addEntity" element={<AddGadgetForm/>} />
          <Route path="https://main--pocketportal.netlify.app/updateEntity/:id" element={<UpdateGadgetForm />} />
          <Route path="https://main--pocketportal.netlify.app/Gadgets" element={<Gadgets/>} />
          <Route path="https://main--pocketportal.netlify.app/login" element={<Login/>}></Route>
          <Route path="https://main--pocketportal.netlify.app/" element={<Signup/>}></Route>
        </Routes>
        {/* <Login></Login> */}
        {/* <Signup></Signup> */}
      </>
  );
}

export default App;
