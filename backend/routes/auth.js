const express= require("express");
const router = express.Router();

// router is like a mini app for specific kind of routes 
// it is just like app
// To access the request body, you need to use a middleware like express.json() or express.urlencoded() before defining your routes.
 router.use(express.json());

/// yaha pe khali / ki baat ni ho rahi hian  uske phle api/auth hoga 
router.get("/",(req,res)=>{

   
    const object = {
        name:"vishal sharma",
        age:23,
    }
    // req.body property is typically populated with the contents of the request body, but it requires additional middleware to be set up to parse the request body
    console.log(req.body);
    res.json(object);
})

module.exports=router;

