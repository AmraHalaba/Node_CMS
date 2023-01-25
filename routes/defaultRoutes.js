//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS - LIBRARIES/MODULES
const express = require('express');

//IMPORTS / INTERNAL
const defaultController = require('../controllers/defaultController');


//-------------------------------------------------------------------------------------------------------------------------------------
//CREATE ROUTER OBJECT
const router = express.Router();


//-------------------------------------------------------------------------------------------------------------------------------------
//all() METHOD -  APPLIES TO ALL ROUTES THAT START WITH /; works as a middleware basically
router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'default';

    next();
});


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES HOMEPAGE: 
router.route('/')
    .get(defaultController.index);


//-------------------------------------------------------------------------------------------------------------------------------------
//LOGIN ROUTES
router.route('/login')
    .get(defaultController.loginGet)
    .post(defaultController.loginPost);


//-------------------------------------------------------------------------------------------------------------------------------------
//REGISTER ROUTES
router.route('/register')
    .get(defaultController.registerGet)
    .post(defaultController.registerPost);



//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = router;