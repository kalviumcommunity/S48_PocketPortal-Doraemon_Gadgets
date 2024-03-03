const express = require('express');
const app = express();
const port = 8000;
const Doraemongadgetsmodel = require('./Model/doraemongadgets')
const mongoose=require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI
const cors = require('cors')
app.use(cors())
app.use(express.json())

mongoose.connect(mongoURI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

const crudRoutes = require('./routes');
app.use('/api', crudRoutes);

const db =mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

app.get('/',(req,res)=>{
  res.send(`Database Connection Status:${db.readyState===1?'Connected':'Disconnected'}`);
});


app.get('/ping',(req,res)=>{
  res.json({message:"pong"})
})

app.get('/getGadgets', (req, res) => {
  Doraemongadgetsmodel.find()
      .then(gadgets => res.json(gadgets))
      .catch(err => res.json(err));
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}



module.exports = app;