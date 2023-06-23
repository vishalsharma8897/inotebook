const mongoose = require("mongoose");

const { Schema } = mongoose; // using Schema ki naam ki class as a property of mongoose object , destructuring

const NotesSchema = new Schema({

   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
   },
   title:{
    type:String,
    required:true, 
   },
   desc:{
    type:String,
    required:true, 
   },
   tag:{
    type:String,
    default:"General"
   },
   date:{
    type:Date,
    default:Date.now,
   }
});

module.exports=mongoose.model("Notes",NotesSchema);