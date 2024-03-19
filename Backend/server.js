const express = require('express');
const app = express();
const port =  process.env.PORT || 8000;
const mongoose=require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI
const cors = require('cors')
app.use(cors())
app.use(express.json())

mongoose.connect(mongoURI);
const db =mongoose.connection;
db ? console.log("connected to the database") :console.log("not connected");
db.on('error',console.error.bind(console,'MongoDB connection error:'));

const crudRoutes = require('./routes');
app.use('/api', crudRoutes);

app.get('/',(req,res)=>{
  res.send(`Database Connection Status:${db?'Connected':'Disconnected'}`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
