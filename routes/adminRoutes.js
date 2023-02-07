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

router.route('/testposts')
    .get(adminController.getPostsTEST);

//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES ADMIN CREATE POSTS
router.route('/posts/create')
    .get(adminController.createPosts)
    .post(adminController.submitPosts);


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES ADMIN EDIT POSTS
router.route("/posts/edit/:id")
    .get(adminController.editPosts);


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES ADMIN DELETE POSTS
router.route("/posts/delete/:id")
    .delete(adminController.deletePosts);


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES ADMIN CATEGORIES
router.route("/category")
    .get(adminController.getCategories)
    .post(adminController.createCategories);

//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = router;