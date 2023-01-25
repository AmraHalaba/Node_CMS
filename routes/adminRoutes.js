//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS - LIBRARIES/MODULES
const express = require('express');

//IMPORTS / INTERNAL
const adminController = require('../controllers/adminController');


//-------------------------------------------------------------------------------------------------------------------------------------
//CREATE ROUTER OBJECT
const router = express.Router();


//-------------------------------------------------------------------------------------------------------------------------------------
//all() METHOD -  APPLIES TO ALL ROUTES THAT START WITH /admin; works as a middleware basically
router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'admin';

    next();
});


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES ADMIN DASHBOARD: 
router.route('/')
    .get(adminController.index);


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES ADMIN POSTS
router.route('/posts')
    .get(adminController.getPosts);


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES ADMIN CREATE POSTS
router.route('/posts/create')
    .get(adminController.createPosts)
    .post(adminController.submitPosts);


//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = router;