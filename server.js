const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
console.log(process.env)

// define the ping route
app.get('/env',(req,res)=>{
  let projectname=process.env.projectname
  let authorname=process.env.authorname
  res.json({projectname,authorname})
})

app.get('/ping',(req,res)=>{
  res.json({message:"pong"})
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;