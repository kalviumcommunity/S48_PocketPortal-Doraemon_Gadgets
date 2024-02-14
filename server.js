const express = require('express');
const app = express();
const port = 3000;

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