
const mongoose=require('mongoose')
const Schema= mongoose.Schema

const bookingSchema = new Schema({
    room:{type:String, required:true},
    roomid:{type:String, required:true},
    userid:{type:String , required:true},
    fromdate:{type:String, required:true},
    todate:{type:String, required:true},
    totalDays:{type:Number , required:true},
    totalAmount:{type:Number, required:true},
    transactionId:{type:String, required:true},
    status:{type:String, required:true , default:'booked'},
},
{
    timestamps:true,
}) 

module.exports=mongoose.model('bookings' , bookingSchema)

