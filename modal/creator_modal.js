const mongoose = require("mongoose");

const creatorSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    youtube:{
        type:String
    },
    instagram:{
        type: Array
    },
    twitter:{
        type : String,
        default: ""
    },
}, { timestamps: true });

module.exports = mongoose.model("Creator", creatorSchema);