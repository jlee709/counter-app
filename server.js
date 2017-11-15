const express = require('express');
const PORT = process.env || 3000;
const app = express();

const counter = 0;


app.get('api/counter', (req,res) =>{
  res.json(counter);
})

app.get('api/counter/inc', (req,res) =>{
   ++counter.count;
   res.end();
})

app.get('api/counter/dec', (req,res) =>{
   --counter.count;
   res.end();
})

app.get('api/counter', (req,res) =>{
  
})


app.listen(PORT, () => {
  console.log(`on port: ${PORT}`);
});