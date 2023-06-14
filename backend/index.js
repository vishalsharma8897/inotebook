const connectToMongo= require("./db");// imported connectToMongo for connection 
const express = require("express");
const app = express();


connectToMongo();  // connected 

// Availbale routes;
app.use('/api/auth',require('./routes/auth'));    // router object wiil be replaced by require(...) and  wiill act as a middleware function 
app.use('/api/notes',require('./routes/notes'));



app.listen(8080,()=>{
    console.log("server started at port 8080");
})