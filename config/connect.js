const config =require('config')
const db =config.get('db')


const mongoose=require('mongoose')


const connect=async()=>{
    try {
        await mongoose.connect(db)
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connect