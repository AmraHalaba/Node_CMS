//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS - LIBRARIES/MODULES
const mongoose = require("mongoose");

//-------------------------------------------------------------------------------------------------------------------------------------
//CREATE VARIABLES
const Schema = mongoose.Schema;

//-------------------------------------------------------------------------------------------------------------------------------------
//DEFINE POST SCHEMA
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  }
  
});

//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = mongoose.model("user", UserSchema);
//module.exports = { Post: mongoose.model("user", UserSchema) };

//-------------------------------------------------------------------------------------------------------------------------------------
