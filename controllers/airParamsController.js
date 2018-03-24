const mongoose = require('mongoose');
const AirParams = mongoose.model('AirParams');

exports.addAirParams = async (req, res) => {
    // get all measurements from URL with req.params
    const airParams = new AirParams(req.params);
    await airParams.save();
    res.send('Measurements saved');
};


// const airParams = require('./models/airParamsModel');

// let getLastAirParams = () => {
//     return new Promise( (resolve, reject) => {
//         airParams.find({}, (err, data) => {
//             if (err) {
//                 reject(err);
//                 console.log('error querying data', err);
//             } else {
//                 resolve(data);
//             }
//         }).limit(1).sort({date:-1});
//     });
// }

// module.exports = (app) => {
//     app.get('/fetchAirMeasurements', (req, res) => {
//         getLastAirParams().then( (data) => {
//             res.send(JSON.stringify(data));
//         })
//     })
// }