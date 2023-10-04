const express = require('express');
var cors = require('cors')


//Create an Express App
const app = express();

//Require application Route modules
const food = require('../backend/routes/food.js');
const owner = require('../backend/routes/owner.js');

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/food', food);
app.use('/api/owner', owner);


module.exports = app; // export the express app.