const express= require("express");
const router = express.Router();

// router is like a mini app for specific kind of routes 
// it is just like app


/// yaha pe khali / ki baat ni ho rahi hian  uske phle api/auth hoga 
router.get("/",(req,res)=>{
    myArray = ["Ford", "BMW", "Fiat"];
    res.json(myArray);
})

module.exports=router;

