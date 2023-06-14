const mongooose = require("mongoose");

const { Schema } = mongoose; // using Schema ki naam ki class as a property of mongoose object , destructuring

const NotesSchema = new Schema({
   title:{
    type:string,
    required:true, 
   },
   desc:{
    type:string,
    required:true, 
   },
   tag:{
    type:string,
    default:"General"
   },
   date:{
    type:Date,
    default:Date.now,
   }
});

module.exports=mongooose.model("notes",NotesSchema);