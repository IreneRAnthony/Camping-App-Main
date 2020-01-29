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
                // req.session.user_id = user._id;
                // req.session.email = user.email;
                return true;
            } if (err){
                return false; 
            } else {
                return false;
            }
        })
    },

    logout: function(req, res){

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
    }
}
