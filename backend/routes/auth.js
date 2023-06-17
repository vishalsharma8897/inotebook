const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secretKey = 'VishalKOG_Developer'; //with your own secret key



router.post("/createuser", [
  [
    // Define validation rules using express-validator's check function
    body("name").isLength({ min: 5 }).withMessage("Name must has atleast 5 characters"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
], async (req, res) => {
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

    // finding the securedpassword for the user by using brypt.js library ;
    // Generate a salt
    const salt = await bcrypt.genSaltSync(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hashSync(password, salt);
    
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

    res.json({token});

  } catch (error) {
    // Handle any error that occurs during the user creation process
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }


})

module.exports = router;

