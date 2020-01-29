const mongoose = require('mongoose');
require('../models/user.model')
const User = mongoose.model('User');

module.exports = {
    createUser: function(req, res){
        console.log("Creating user...");
        bcrypt.hash(req.body.password)
        .then(hashedPassword => {
            req.body.password = hashedPassword;
            User.create(req.body);
        })
        .then(newUser => {
            console.log(newUser);
            res.json(newUser);
            req.session.user_id = user._id;
            req.session.email = user.email;
        })
        .catch(err => res.json(err));
    },

    login: function(req, res){
        console.log('Logging in User...', req.body);
        User.findOne({ email:req.body.email }, (err, user) => {
            return bcrypt.compare(req.body.password, user.password)
        })
        .then((result) => {
            if(result){
                req.session.user_id = user._id;
                req.session.email = user.email;
                return true;
            } if (err){
                return false; 
            } else {
                return false;
            }
        })
    },

    logout: function(req, res){
        req.session.destroy(function (err) {
            res.send();
        })
    },

    updateUser: function(req, res){
        User.findByIdAndUpdate({
            _id: req.params.userId
        }, {
            $set: req.body
        })
        .then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(err => res.json(err));
    },

    deleteUser: function(req, res){
        User.findByIdAndDelete({
            _id: req.params.userId
        })
        .then(deletedUser => {
            res.send();
        })
        .catch(err => res.json(err));
    }

}
