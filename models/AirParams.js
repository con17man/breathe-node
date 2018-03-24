'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const airParamsSchema = new mongoose.Schema({
    date: Date,
    temperature: Number,
    humidity: Number,
    presure: Number,
    gas_LPG: Number,
    gas_CO: Number,
    gas_smoke: Number
});

// add date before saving the measurements into the DB
airParamsSchema.pre('save', function(next) {
    this.date = new Date();
    return next();
})

module.exports = mongoose.model('AirParams', airParamsSchema);