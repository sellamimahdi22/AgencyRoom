const User = require("../models/User")
const config=require('config')
const bc=require('bcrypt')
const jwt=require('jsonwebtoken')
const secret=config.get('secret')


exports.register=async(req,res)=>{
    const {firstname,name,Email,password,phone,country}=req.body
    const exituser=await User.findOne({Email})
    if(exituser)
return
res.status(409).json({msg:"user exist!!"})
try {
    const newuser= new User
        ({
            firstname,name,Email,password,phone,country,userRole
        })
        let salt =await bc.genSalt(10);
        let hash =await bc.hash(password, salt);
        newuser.password=hash
        await newuser.save()
const payload ={
    id:newuser._id
}
        let token = jwt.sign(payload,secret);
res.send({
    token,user:{
        firstname:newuser.firstname,
        name:newuser.name,
        Email:newuser.Email,
        country:newuser.country,
        phone:newuser.phone,
        id:newuser._id,
        userRole:newuser.userRole
    }
})
} catch (error) {
    res.status(500).json({msg:error.message})
}
}



exports.login=async(req,res)=>{
    const {Email,password}=req.body
    try {
        const exist = await User.findOne({Email});
        if (!exist) return res.status(404).json({msg: 'User does not exist!'});
        const isMatch = await bc.compare(password, exist.password);
        if (!isMatch) return res.status(400).json({msg: 'Invalid credentials'});
        const payload = {
          id: exist._id,
        };
        const token = await jwt.sign(payload, secret);
        res.send({
          token,
          id:exist._id,
          Lastname: exist.name,
          firstname:exist.firstname,
          Email: exist.Email,
          phone: exist.phone,
          country: exist.country,
          userRole:exist.userRole,

        });
      } catch (error) {
        res.status(500).json({errors: error.message});
      }
}

exports.auth=(req,res)=>{
    res.send(req.user)
}