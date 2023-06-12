const connectToMongo= require("./db");
const express = require("express");
const app = express();
connectToMongo();


app.get('/',(req,res)=>{
    res.send("Hello world");
});


app.listen(8080,()=>{
    console.log("server started at port 8080");
})