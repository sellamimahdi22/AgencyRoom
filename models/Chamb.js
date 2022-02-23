const mongoose=require('mongoose')
const Schema= mongoose.Schema
const chamschema = new Schema({

    title: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      confort: {
        type: String,
        required: true,
      },
      imageUrl: [],
      price: {
        type: Number,
        required: true,
      },
      
      date: {
        type: Date,
        default: Date.now(),
      },
      dispo:[],
      booking :{
        userId :{
          type:String,
          default:''
        },
        from_date:{
          type:Date,
          default:''
        },
        to_date:{
          type:Date,
          default:''
        },

      }
})
module.exports=mongoose.model("chambre",chamschema)