'use strict';

const airParams = require('../models/airParamsModel');

module.exports = (app) => {
    app.get('/seeds', (req, res) => {

        let dateNow = new Date();

        let seed = new airParams({
            date: dateNow,
            temperature: 23.4,
            humidity: 37.4,
            presure: 1008.93,
            gas_LPG: 0.000123,
            gas_CO: 0.000075,
            gas_smoke: 0.0023249
        });

        airParams.create(seed, (err, results) => {
            if (err) {
                console.log('Error sending data to DB', err);
            }else {
                res.status('Data saved successfully to DB', results);
            }
        })

    })
}