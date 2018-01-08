'use strict';

const mongoose = require('mongoose');

// connect to the mongoDB (mLabs)
let DBconnect = () => {
    mongoose.connect(
        `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}>@ds247077.mlab.com:47077/pi-measurements`, {
        useMongoClient: true
    });
};

module.exports = {
    DBconnect
}
