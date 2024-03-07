import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Gadgets from './components/Gadgets';
import AddGadgetForm from './components/AddGadgetForm';
import UpdateGadgetForm from './components/UpdateGadgetForm';

function App() {
  return (
      <>
        <Routes>
          <Route path="/addEntity" element={<AddGadgetForm/>} />
          <Route path="/updateEntity/:id" element={<UpdateGadgetForm />} />
          <Route path="/" element={<Gadgets/>} />
        </Routes>
      </>
  );
}

export default App;
