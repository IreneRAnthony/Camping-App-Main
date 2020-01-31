const mongoose = require('mongoose');
require('../models/user.model')
const User = mongoose.model('User');

module.exports = {
    createUser: function(req, res){
        console.log("Creating user...");
        bcryptjs.hash(req.body.password, 10)
        .then(hashedPassword => {
            req.body.password = hashedPassword;
            return User.create({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }); 
        })
        .then(newUser => {
            console.log('Hashed Password and created user!')
            console.log(newUser);
            res.json(newUser);
            req.session.user_id = newUser._id;
            req.session.email = newUser.email;
        })
        .catch(err => {
            res.json(err);
            console.log("Error: "+err);
        
        });
    },

    login: function(req, res){
        console.log('Logging in User...', req.body);
        User.findOne({ email:req.body.email })
        .then( resp => {
            if(bcryptjs.compare(req.body.password, user.password)){
                req.session.user_id = resp.user._id;
                req.session.email = resp.user.email;
            }
            else{
                res.json("PASSWORD DOESNT MATCH")
            }
        })
        .catch( err =>{
            res.json(err)
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
