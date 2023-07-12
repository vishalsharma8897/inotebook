const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secretKey = 'VishalKOG_Developer'; //with your own secret key
const fetchuser= require("../middleware/fetchuser");


//Route 1: route to create the user api/auth/createuser
router.post("/createuser", [
  
    // Define validation rules using express-validator's check function
    body("name").isLength({ min: 5 }).withMessage("Name must has atleast 5 characters"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  
], async (req, res) => {
  // validation errors;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success:false ,  errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success:false ,  error: "User already exists" });
    }

    // finding the securedpassword for the user by using brypt.js library ;
    // Generate a salt
    const salt =  bcrypt.genSaltSync(10);

    // Hash the password using the generated salt
    const hashedPassword =  bcrypt.hashSync(password, salt);
    
    // Create a new user instance
    user = new User(
      {
        name: name,
        email: email,
        password: hashedPassword,
      });

    // Save the user to the database
    await user.save();

    // Return success response

    const data = user.id;
    
    const token = jwt.sign(data, secretKey);
    // console.log(token);
    // res.json({token:token});

    res.json({success:true , token});

  } catch (error) {
    // Handle any error that occurs during the user creation process
    console.error(error);
    res.status(500).json({ success:false ,  error: error});
  }


})

// Route 2: route to authenticate the user :: api/auth/login

router.post("/login",[
  body("email").isEmail().withMessage("Invalid Email"),
  body("password").exists()
],async(req,res)=>{

// check for any validation errors here
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({  success:false , errors: errors.array() });
}

const {email,password}= req.body;
// console.log(email);
try {
  const user = await User.findOne({email});
//  console.log(user);
  if(user)
  {
    
    const storedHashedPassword = user.password;
    
    const match = await bcrypt.compare(password, storedHashedPassword);

    if(!match) {
      res.status(400).json({  success:false , message: "please try to login with correct Crediantials" });     
    }
    else {
      const data = user.id;
      const token = jwt.sign(data, secretKey);
  
      res.json({success:true , token}); // token is a string {token} is a  object ;
     
     }

  }
  else {
    res.status(400).json({ success:false , message: "please try to login with correct Crediantials" });
  }

} catch (error) {
  console.log(error);
  res.status(500).json({ success:false ,  error: error});
}

});

// Route3: getting user details : login required:

 router.post("/getuser",fetchuser,async(req,res)=>{
   try {
      const userId = req.userId;
      const user = await User.findById(userId).select("-password");
       
       return res.status(200).json({success:true , user});

   } catch (error) {
    console.log(error);
    res.status(500).json({ success:false ,  error: error});
   }
 })

module.exports = router;

