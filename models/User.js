const mongoose=require('mongoose')
const Schema= mongoose.Schema
const userschema = new Schema({
    firstname: String,
    Lastname: String,
    Email: String,
    password:String,
    phone: String,
    country: String,
    isAdmin : {type: Boolean , require , default: false},
    

})
module.exports=mongoose.model("user",userschema)