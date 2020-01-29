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
<<<<<<< HEAD

    },
    // socket controller 
    socketConnect: function (socket) {
        console.log("Connected!");
    
        socket.on("new_user", function (data) {
            users[socket.id] = {
                name: data.name
            };
            console.log(users[socket.id]);
            socket.emit('existing_messages', messages);
            io.emit("display_new_user", {
                name: data.name
            })
    }),
    // socket controller 
    socket.on("new_message", function (data) {
        messages[id] = {
            name: data.name,
            message: data.message
        };
        io.emit("update_messages", messages[id]);
        id++;
    }),
    // socket controller 
    socket.on("disconnect", function () {
        io.emit("user_disconnect", users[socket.id])
    })
=======
        req.session.destroy(function (err) {
            res.send();
        })
    },

    updateUser: function(req, res){
        User.findByIdAndUpdate({
            _id: req.params.iId
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
            _id: req.params.id
        })
        .then(deletedUser => {
            res.send();
        })
        .catch(err => res.json(err));
>>>>>>> 43df4024f9284d2f944e85d8cca28643def70327
    }

}
