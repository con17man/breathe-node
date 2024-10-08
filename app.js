'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');
const path = require('path');

const routes = require('./routes/index');

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// We handle our own routes!
app.use('/', routes);

// done! we export it so we can start the site in start.js
module.exports = app;