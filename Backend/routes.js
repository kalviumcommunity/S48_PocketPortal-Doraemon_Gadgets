const express = require('express');
const router = express.Router();
const Doraemongadgetsmodel = require('./Model/doraemongadgets')
const usersmodel = require('./Model/users')
const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const gadgetSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  ratings: Joi.string().required(),
  category: Joi.string().required(),
});
// Get all Gadgets
router.get('/getGadgets', (req, res) => {
  Doraemongadgetsmodel.find()
      .then(gadgets => res.json(gadgets))
      .catch(err => res.json(err));
})

router.get('/getUsers', (req, res) => {
  usersmodel.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
})

// Get a specific item by ID
router.get('/getGadgets/:id', (req,res)=>{
  const id=req.params.id;
  Doraemongadgetsmodel.findById({_id:id}).then(gadget=>res.json(gadget))
  .catch(err=>res.json(err))
});

// Create a new Gadget
router.post('/addGadget', async (req, res) =>{
  try{
    const validationResult = await gadgetSchema.validateAsync(req.body);
    const data = await Doraemongadgetsmodel.create(validationResult);
    res.json(data);
  }catch(err){
    console.error(err);
    res.status(400).json({ error:'Validation Error'});
  }
});

router.post('/addUser', async (req, res) =>{
  try{
    const validationResult = await userSchema.validateAsync(req.body);
    const data = await usersmodel.create(validationResult);
    res.json(data);
  }catch(err){
    console.error(err);
    res.status(400).json({ error: 'Validation Error' });
  }
});

router.post('/login', async(req, res) =>{
  try{
    const {username, password} = req.body;
    const validationSchema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    const validationResult = await validationSchema.validateAsync({username,password});
    const user = await usersmodel.findOne({username: validationResult.username,password: validationResult.password});

    if(user){
      res.json({success: true, message: 'Login successful'});
    } else{
      res.status(401).json({success: false, message: 'Invalid username or password'});
    }
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
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