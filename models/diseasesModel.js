'use strict';

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var diseasesSchema = new Schema({
    name: { type: String }
});

var Diseases = mongoose.model('Diseases', diseasesSchema);

module.exports = Diseases;
