'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const airParamsLimitsSchema = new mongoose.Schema({
    tmpVal: { type: Number, default: 37 },
    tmpNotif: { type: Boolean, default: false },

    hmdVal: { type: Number, default: 70 },
    hmdNotif: { type: Boolean, default: false },

    smkVal: { type: Number, default: 0.07 },
    smkNotif: { type: Boolean, default: false },
});

module.exports = mongoose.model('AirParamsLimits', airParamsLimitsSchema);