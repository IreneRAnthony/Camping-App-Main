const mongoose = require('mongoose');
require('../models/user.model')
const User = mongoose.model('User');

module.exports = {
    createUser: function(req, res){
        console.log("Creating user...");
        User.create(req.body)
        .then(newUser => {
            console.log(newUser);
            res.json(newUser);
        })
        .catch(err => res.json(err));
    }
}
