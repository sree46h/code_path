const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Creator = require('../modal/creator_modal')
console.log("sreehari naiduuu")
router.post("/create", async(req, res) => {
  const creator = req.body;
  const newCreator = new Creator(creator);
  await newCreator.save()
    .then((creator) => {
      console.log('creator:', creator);
      res.status(201).json({ message: 'Creator saved successfully', creator });
    })
    .catch((err) => {
      console.error('Error saving user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
    
});

router.post("/update", async(req, res) => {


    const {creator,id} = req.body;
    console.log("my req bodayy",req.body)
    try {
        const updatedCreator = await Creator.findOneAndUpdate(
          { _id: id },               // Query: find by ID
          { $set: creator },     // Update: set new data
          { new: true, upsert: false } // Options: return updated document, don't create if not found
        );
    
        if (!updatedCreator) {
          console.log('Creator not found');
          return null;
        }
    
        console.log('Updated Creator:', updatedCreator);
        
      } catch (error) {
        console.error('Error updating creator:', error);
      }
});
//api/creator/getCreators
router.get("/getCreators",async(req,res)=>{
    try {
        // Fetch all creators using await
        console.log("atleast here")
        const creators = await Creator.find({});
        console.log("myCreator",creators)
        // Send the creators as the response
        res.status(200).json(creators);
      } catch (error) {
        // Handle any errors that occur during the find operation
        console.error('Error fetching creators:', error);
        res.status(500).json({ message: 'Error fetching creators', error: error.message });
      }
})

module.exports = router;