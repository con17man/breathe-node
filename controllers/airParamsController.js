const mongoose = require('mongoose');
const AirParams = mongoose.model('AirParams');

exports.addAirParams = async (req, res) => {
    // get all measurements from URL with req.params
    const airParams = new AirParams(req.params);
    await airParams.save();
    res.send('Measurements saved');
};


exports.getLastAirParams = async (req, res) => {
    const lastAirParams = await AirParams.find().limit(1).sort({ date: -1 });
    res.send(lastAirParams[0]);
}
