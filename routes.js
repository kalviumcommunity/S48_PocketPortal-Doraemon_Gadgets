const express = require('express');
const router = express.Router();

// Dummy object for demonstration (replace with your actual MongoDB models)
let Gadgets = [
  { id: 1, name: 'Anywhere Door', category:'Transportation' },
  { id: 2, name: 'Big light', category:'Size Manipulation' },
  { id: 3, name: 'Time Machine',category:'Time and transportation' },
];

// Get all Gadgets
router.get('/Gadgets',(req,res)=>{res.json(Gadgets)});

// Get a specific item by ID
router.get('/Gadgets/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  const Gadget=Gadgets.find((Gadget)=>Gadget.id===id);
  if(Gadget){
    res.json(Gadget);
  }else{
    res.status(404).json({message:'Gadget not found'});
  }
});

// Create a new Gadget
router.post('/Gadgets', (req,res)=>{
  const newGadget={id:Gadgets.length+1, name:req.body.name, category:req.body.category };
  Gadgets.push(newGadget);
  res.status(201).json(newGadget);
});

// Update an item by ID
router.put('/Gadgets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedGadget = Gadgets.find((item) => item.id === id);

  if (updatedGadget) {
    // Update properties based on query parameters
    if (req.query.name) {
      updatedGadget.name = req.query.name;
    }
    if (req.query.category) {
      updatedGadget.category = req.query.category;
    }

    res.json(updatedGadget);
  } else {
    res.status(404).json({ message: 'Gadget not found' });
  }
});

// Delete an item by ID
router.delete('/Gadgets/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  Gadgets=Gadgets.filter((item)=>item.id!==id);
  res.json({ message:'Gadget deleted successfully'});
});

module.exports = router;
