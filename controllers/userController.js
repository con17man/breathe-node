// const mongoose = require('mongoose');
// const User = mongoose.model('User');

exports.registerUser = async (req, res) => {
    console.log(req.body);
    res.sendStatus(200)
}