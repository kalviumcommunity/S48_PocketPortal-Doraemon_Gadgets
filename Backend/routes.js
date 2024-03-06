const express = require('express');
const router = express.Router();
const Doraemongadgetsmodel = require('./Model/doraemongadgets')

// Get all Gadgets
router.get('/getGadgets', (req, res) => {
  Doraemongadgetsmodel.find()
      .then(gadgets => res.json(gadgets))
      .catch(err => res.json(err));
})

// Get a specific item by ID
router.get('/Gadgets/:id',async (req,res)=>{});

// Create a new Gadget
router.post('/addGadget',  (req, res) => {
  Doraemongadgetsmodel.create(req.body)
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
});

// Update an item by ID
router.put('/Gadgets/:id', (req, res) => {});

// Delete an item by ID
router.delete('/Gadgets/:id',(req,res)=>{
  const id=parseInt(req.body);
  Gadgets=Gadgets.filter((item)=>item.id!==id);
  res.json({ message:'Gadget deleted successfully'});
});

module.exports = router;
