const mongoose = require('mongoose');
require('../models/task.model')
const Task = mongoose.model('Task');

module.exports = {
    createTask: function(req, res){
        console.log('Creating task...');
        Task.create({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            completed: req.body.priority,
            creator: user._id
        })
        .then(newTask => {
            res.json(newTask);
            console.log('Created Task!', newTask);
        })
        .catch(err => res.json(err));
    },

    allTasks: function(req, res){
        console.log("Retrieving all tasks...");
        Task.find()
        .then(allTasks => {
            res.json(allTasks);
        })
        .catch(err => res.json(err));
    },

    searchTasks: function(req, res){
        console.log("Searching for task...");
        Task.findById({
            _id: req.params.id
        })
        .then(foundTask => {
            res.json(foundTask);
        })
        .catch(err => res.json(err));
    },

    updateTask: function(req, res){
        Task.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        })
        .then(updatedTask => {
            res.json(updatedTask);
        })
        .catch(err => res.json(err));
    },

    deleteTask: function(req, res){
        Task.findByIdAndDelete({
            _id: req.params.id
        }, { 
            $set: req.body
        })
        .then(deletedTask => {
            res.send()
        })
        .catch(err => res.json(err));
    }

}
