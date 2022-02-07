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
      // imageUrl: String,
      category: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      
      date_added: {
        type: Date,
        default: Date.now(),
      },
      // dispo: {
      //   type: String,
      //   required: true,
      // },
})
module.exports=mongoose.model("chambre",chamschema)