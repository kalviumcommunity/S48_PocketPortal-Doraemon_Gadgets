const express = require('express');
const app = express();
const port = 8000;
require('dotenv').config()
console.log(process.env)

const mongoose=require('mongoose');
mongoose.connect(process.env.mongoURI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

app.get('/',(req,res)=>{
  res.send(`Database Connection Status:${db.readyState===1?'Connected':'Disconnected'}`);
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

// define the ping route
app.get('/ping',(req,res)=>{
  res.json({message:"pong"})
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;