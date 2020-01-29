const mongoose = require('mongoose');
require('../models/trip.model')
const Trip = mongoose.model('Trip');

module.exports = {
    createTrip: function(req, res){
        console.log('Creating trip...');
        Trip.create(req.body)
        .then(newTrip => {
            console.log(newTrip);
            res.json(newTrip);
        })
        .catch(err => res.json(err));
    },

    allTrips: function(req, res){
        Trip.find()
        .then(trip => {
            res.json(trip);
        })
        .catch(err => res.json(err));
    },

    searchTrip: function(req, res){
        Trip.findById({
            _id: req.params.id
        })
        .then(trip => {
            console.log('Got a trip!', trip);
            res.json(trip);
        })
        .catch(err => res.json(err));
    },

    updateTrip: function(req, res){
        Trip.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        })
        .then(editedTrip => {
            console.log('Edited!', editedTrip);
            res.json(editedTrip);
        })
        .catch(err => res.json(err));
    },

    deleteTrip: function(req, res){
        Trip.findByIdAndDelete({
            _id: req.params.id
        })
        .then(deletedTrip => {
            res.send();
        })
        .catch(err => res.json(err));
    }
}
