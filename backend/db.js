const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/inotebook"; // connection string

const  connectToMongo= async()=>{
   await mongoose.connect(mongoUri).then(()=>{
    console.log("connected succesfully");
   }).catch((err)=>{
       console.err("could not connect due to " + err);
   })
   
}

module.exports=connectToMongo;  // m.e
