const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.loginUser = async (req, res) => {

    await User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log('>>>error finding user', err);
        } else {
            res.send(user);
        }
    })

}


exports.registerUser = async (req, res) => {

    // TODO
    // [DONE] Save user input to DB
    // Check if email exists in the DB

    const newUser = new User(req.body);
    await newUser.save();

    res.send(req.body);

}