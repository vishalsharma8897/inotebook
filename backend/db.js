const mongoose = require("mongoose");
const mongoUri = "mongodb+srv://vishalsharma19052001:TRfE2yvjHO69xyrk@cluster0.zptw4x5.mongodb.net/inotebook"; // connection string

const  connectToMongo= async()=>{
   await mongoose.connect(mongoUri).then(()=>{
    console.log(" Database connected succesfully");
   }).catch((err)=>{
       console.error("Db could not connect due to " + err);
   })
   
}

module.exports=connectToMongo;  // m.e
