const connectToMongo= require("./db");// imported connectToMongo for connection 
const express = require("express");
let port = process.env.PORT || 8080;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
connectToMongo();  // connected 

// Availbale routes;
app.use('/api/auth',require('./routes/auth'));    // router object wiil be replaced by require(...) and  wiill act as a middleware function 
app.use('/api/notes',require('./routes/notes'));



app.listen(port,()=>{
    console.log("Server started at port 8080");
})