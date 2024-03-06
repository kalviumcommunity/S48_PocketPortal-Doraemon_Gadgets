import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Gadgets from './components/Gadgets';
import AddGadgetForm from './components/AddGadgetForm';

function App() {
  return (
    
      <>
        <Routes>
          <Route path="/addEntity" element={<AddGadgetForm/>} />
          <Route path="/" element={<Gadgets/>} />
        </Routes>
      </>
    
  );
}

export default App;
