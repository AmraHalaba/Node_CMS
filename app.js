//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS - LIBRARIES/MODUELS
const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');
const flash    = require('flash');
const session  = require('express-session')
//const morgan   = require('morgan');

//IMPORT - INTERNAL
const { mongoDbUrl, PORT, globalVariables } = require('./config/configuration');
//const { globalVariables }                   = require('./config/configuration');


//-------------------------------------------------------------------------------------------------------------------------------------
//CREATE AN INSTANCE OF EXPRESS APP
const app = express();


//-------------------------------------------------------------------------------------------------------------------------------------
//SETUP DATABASE CONNECTION (MONGODB)
mongoose.set('strictQuery', false);
//const mongoDbUrl = 'mongodb+srv://fluff:1111@cms.lquul3i.mongodb.net/?retryWrites=true&w=majority';
//const PORT       = 3000;
mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true  }) 
    .then((result) => {
        console.log("Database Connected Successfully.");
        console.log("DB URI: ", mongoDbUrl);
        app.listen(PORT);
        console.log("Server Started on Port: ", PORT);
    })
    .catch((err) => {
        console.log("Database Connection Failure.")
    });


//-------------------------------------------------------------------------------------------------------------------------------------
//CONFIGURE EXPRESS - basically define middlewares - middlewares is like a plugin that enhances the functionalities of the application
//app.use(express.json); //data to be in json format (instead of body parser earlier)
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public'))); //link public files to the express app - first parameter is the '__dirname' which is node function that extracts the exact location of the main project directory and the second parameter is the name of the folder in which our static files are (in this case 'public')
app.use(express.static('public'));


//-------------------------------------------------------------------------------------------------------------------------------------
//CONFIGURE FLASH AND SESSION
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true,
}));

app.use(flash());


//-------------------------------------------------------------------------------------------------------------------------------------
//GLOBAL VARIABLES
app.use(globalVariables);


//-------------------------------------------------------------------------------------------------------------------------------------
//SETUP VIEW ENGINE
app.set('view engine', 'ejs'); 
app.set('views', 'views'); 


//-------------------------------------------------------------------------------------------------------------------------------------
//SETUP MIDDLEWARE AND STATIC FILES
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); //middleware for accepting form data
//app.use(morgan('dev'));


//-------------------------------------------------------------------------------------------------------------------------------------
//ROUTES
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes   = require('./routes/adminRoutes');

app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);


//-------------------------------------------------------------------------------------------------------------------------------------