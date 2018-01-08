'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/')));

app.listen(PORT, function(){
	console.log(`Up and running on PORT: ${PORT}`);
});

// connect to the mongoDB
// mongoose.connect('mongodb://localhost/utilities', {
//     useMongoClient: true
// });

// load the api
// apiController(app);
