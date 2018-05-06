const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.loginUser = async (req, res) => {

    await User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            console.log('login: error finding user', err);
        } else {
            // check if user exists
            if (user) {
                // check if password matches the one in DB
                if (req.body.password === user.password) {
                    res.send({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    });
                } else {
                    res.send({
                        errorMsg: 'Wrong password. Please retry.'
                    });
                }
            } else {
                res.send({
                    errorMsg: 'User does not exists. Try again or register.'
                });
            }
        }
    });

}


exports.registerUser = async (req, res) => {

    // TODO
    // [DONE] Save user input to DB
    // Check if email exists in the DB

    await User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            console.log('register: error finding email', err);
        } else {
            if (user && req.body.email === user.email) {
                res.send({
                    errorMsg: 'This email is already registered.'
                });
            } else {
                const newUser = new User(req.body);
                newUser.save();

                res.send(true);
            }
        }
    });

}