'use strict';

const mongoose = require('mongoose');

// connect to the mongoDB (mLabs)
let DBconnect = () => {
    mongoose.connect(
        `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@ds247077.mlab.com:47077/pi-measurements`, {
        useMongoClient: true
    }, (err) => {
        if (err) {
            console.error('Error connecting to DB.\nREASON:', err.errmsg);
        } else {
            console.log('Successfully connected to DB');
        }
    });
};

module.exports = {
    DBconnect
}
