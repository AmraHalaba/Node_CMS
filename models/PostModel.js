//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS - LIBRARIES/MODULES
const mongoose = require('mongoose');


//-------------------------------------------------------------------------------------------------------------------------------------
//CREATE VARIABLES
const Schema =  mongoose.Schema;


//-------------------------------------------------------------------------------------------------------------------------------------
//DEFINE POST SCHEMA
const PostSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: 'public'
    },

    description: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: Date.now()
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },

    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comment"
        },
    ],

    allowComments: {
        type: Boolean,
        default:false
    },

});


//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = mongoose.model('post', PostSchema);


//-------------------------------------------------------------------------------------------------------------------------------------