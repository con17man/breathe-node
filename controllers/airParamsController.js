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


exports.getSensorTypeData = async (req, res) => {
    let sensorType = req.params.sensorType;

    let dateNow = new Date();
    let lastXHours = new Date(dateNow.getTime());
    lastXHours.setHours(dateNow.getHours() - 2);

    let dataDB = await AirParams.aggregate([
        {
            $match: {
                date: {
                    $gte: lastXHours,
                    $lt: dateNow
                }
            }
        },
        {
            $project: {
                _id: 0,
                date: 1,
                [sensorType]: 1
            }
        },
        {
            $limit: 120
        },
        {
            $sort: {
                date: 1
            }
        }
    ]);

    res.send(dataDB);
}
