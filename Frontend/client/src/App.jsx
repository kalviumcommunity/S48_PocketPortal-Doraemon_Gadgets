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
          <Route path="/addEntity" element={<AddGadgetForm/>} />
          <Route path="/updateEntity/:id" element={<UpdateGadgetForm />} />
          <Route path="/Gadgets" element={<Gadgets/>} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Signup/>}></Route>
        </Routes>
      </>
  );
}

export default App;
