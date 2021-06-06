const express = require('express');
const router = express.Router();
const Note = require('../model/noteModel');

//Create
router.route("/create").post((req,res)=>{
    const title= req.body.title;
    const content= req.body.content;
    const newNote = new Note({
        title,
        content
    });
    newNote.save();
})

//Read
router.route("/notes").get((req,res)=>{
    Note.find()
    .then(foundNotes => res.json(foundNotes))
})
  
module.exports = router;