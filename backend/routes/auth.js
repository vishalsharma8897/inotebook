const express= require("express");
const router = express.Router();
const mongoose= require("mongoose");
const User= require("../models/User");
const { body, validationResult } = require('express-validator');




router.post("/createuser",[
    [
        // Define validation rules using express-validator's check function
        body("name").isLength({ min: 5 }).withMessage("Name must has atleast 5 characters"),
        body("email").isEmail().withMessage("Invalid Email"),
        body("password")
          .isLength({ min: 6 })
          .withMessage("Password must be at least 6 characters"),
      ],
] ,async (req,res)=>{
   // validation errors;

   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { name, email, password } = req.body;
    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Create a new user instance
      user = new User({ name, email, password });

      // Save the user to the database
      await user.save();

      // Return success response
      res.json({ message: "User created successfully" });
    } catch (error) {
      // Handle any error that occurs during the user creation process
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }


})

module.exports=router;

