'use strict';

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var airParamsSchema = new Schema({
    date: { type : Date, default: Date.now },
    temperature: { type: Number },
    humidity: { type: Number },
    presure: { type: Number },
    gas_LPG: { type: Number },
    gas_CO: { type: Number },
    gas_smoke: { type: Number }
});

var airParams = mongoose.model('airParams', airParamsSchema);

module.exports = airParams;
