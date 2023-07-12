const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const { body, validationResult } = require('express-validator');



// Route1: Route to fetch all the notes in the notes database related to a user; LOgin required
router.get("/fetchnotes", fetchuser, async (req, res) => {
   try {
    const userId = req.userId;
    const notes = await Notes.find({ userId });
    res.send(notes);
   } catch (error) {
    res.status(500).json({error:"Internal Servor error "});
   }
})

// Route2 : Route to add a note in the Notes database for a authenticated user Login required;

router.post("/addnote", fetchuser, [

    // Define validation rules using express-validator's check function
    body("title").isLength({ min: 3 }).withMessage("Title must has atleast 3 characters"),
    body("desc")
        .isLength({ min: 6 })
        .withMessage("Description must be at least 6 characters"),

], async (req, res) => {
    const userId = req.userId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc, tag } = req.body;
   console.log(tag);
    try {
    const note = new Notes({ userId, title, desc, tag });
    const savenote = await note.save();
     res.send(savenote);
    } catch (error) {
        res.status(500).json({error:"Internal Servor error "});
    }
});
 

// Route3 : Route to update an existing note in the Notes database for a authenticated user Login required;

router.put("/updatenote/:id",fetchuser, [

    // Define validation rules using express-validator's check function
    body("title").isLength({ min: 3 }).withMessage("Title must has atleast 3 characters"),
    body("desc")
        .isLength({ min: 6 })
        .withMessage("Description must be at least 6 characters"),

],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {title,desc,tag} = req.body;

    const newnote = {};
    if(title) newnote.title= title;
    if(desc) newnote.desc= desc;
    if(tag) newnote.tag= tag;

    // find the note to be updated and update it :
    const note = await Notes.findById(req.params.id);
    if(!note)
     return res.status(404).send("Not found");
    
    // any other user should not update notes of others;
    if(note.userId.toString()!=req.userId)
    res.status(401).send("Unathorized access denied");

    const updatedNote = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote },{new:true});
    
    res.json(updatedNote);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
    
})

// Route4: Delete a existing note:
router.delete("/deletenote/:id",fetchuser,async(req,res)=>{
   
    try {
       
    // find the note to be updated and update it :
    const note = await Notes.findById(req.params.id);
    if(!note)
    return res.status(404).send("Not found");
    
    // any other user should not update notes of others;
    if(note.userId.toString()!=req.userId)
    res.status(401).send("Unathorized access denied");

    const deletedNote = await Notes.findByIdAndDelete(req.params.id);
    res.json({message:"Note has been deleted succesfully ",deletedNote:deletedNote});

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
    
})





module.exports = router;

