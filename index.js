const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const app=express();
//Body Parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send("HEllo!");
});

app.get('/new-message',(req,res)=>{
  res.json({'hi':'New message received'});
});

app.use('/users',users);

app.listen(5000,() => console.log('Example app listening on port 5000!'))
