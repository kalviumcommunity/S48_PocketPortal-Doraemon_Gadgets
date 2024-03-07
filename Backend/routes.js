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
router.get('/getGadgets/:id', (req,res)=>{
  const id=req.params.id;
  Doraemongadgetsmodel.findById({_id:id}).then(gadget=>res.json(gadget))
  .catch(err=>res.json(err))
});

// Create a new Gadget
router.post('/addGadget',  (req, res) => {
  Doraemongadgetsmodel.create(req.body)
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
});

// Update an item by ID
router.put('/updateGadget/:id', (req, res) => {
  const id = req.params.id;
  Doraemongadgetsmodel.findByIdAndUpdate({_id:id},
    {name:req.body.name,
    description:req.body.description,
    image:req.body.image,
    category:req.body.category,
    ratings:req.body.ratings})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
});

// Delete an item by ID
router.delete('/deleteGadget/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Doraemongadgetsmodel.findByIdAndDelete({ _id: id });
    console.log(result);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
