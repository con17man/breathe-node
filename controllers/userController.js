const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.loginUser = async (req, res) => {
    console.log(req.body);

    await User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log('>>>error finding user', err);
        } else {
            console.log(user);
            res.send(user);
        }
    })

}


exports.registerUser = async (req, res) => {

}