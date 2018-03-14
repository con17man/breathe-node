'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

// create our Express app
const app = express();


// frontend AngularJS _old
// app.use('/', express.static(path.join(__dirname, 'public')));
// app.use('/scripts', express.static(path.join(__dirname, 'node_modules/')));

// done! we export it so we can start the site in start.js
module.exports = app;