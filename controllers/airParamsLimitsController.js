'use strict';

const mongoose = require('mongoose');
const AirParamsLimits = mongoose.model('AirParamsLimits');

exports.getLimits = async (req, res) => {
    const limits = await AirParamsLimits.find().limit(1);

    if (limits.length === 0) {

        let defaultLimits = new AirParamsLimits({});

        await defaultLimits.save();

        const newlyAddedLimits = await AirParamsLimits.find().limit(1);
        res.send(newlyAddedLimits[0]);

    } else {
        res.send(limits[0]);
    }

}


exports.updateLimits = async (req, res) => {

    const limits = await AirParamsLimits.findByIdAndUpdate(req.body._id, req.body, (err, limits) => {
        if (err) {
            return res.status(500).send({error: true});
        }
        res.send({success: true});
    });
}