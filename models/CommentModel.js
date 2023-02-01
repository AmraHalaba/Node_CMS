//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS - LIBRARIES/MODULES
const mongoose = require("mongoose");

//-------------------------------------------------------------------------------------------------------------------------------------
//CREATE VARIABLES
const Schema = mongoose.Schema;

//-------------------------------------------------------------------------------------------------------------------------------------
//DEFINE POST SCHEMA
const CommentSchema = new Schema({
    body: {
    type: String,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },

  date: {
    type: Date,
    default: Date.now()
  },

  approvedComment: {
    type: Boolean,
    default: false
  }

});

//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = mongoose.model("comment", CommentSchema);

//-------------------------------------------------------------------------------------------------------------------------------------
