const express=require('express');
const connect=require('./config/connect');
const user = require('./routes/user');
const chambres=require('./routes/Chambre')
var cors = require('cors')
const app=express();
app.use(cors())
app.use(express.json());
app.use('/user',user)
app.use('/chambres',chambres)
connect()
app.listen(5000,(err)=> err?console.error(err):console.log("server running on port 5000"))