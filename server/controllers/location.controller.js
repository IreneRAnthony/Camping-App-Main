const mongoose = require('mongoose');
require('../models/location.model')
const Location = mongoose.model('Location');

module.exports = {
    createLocation: function(req, res){
        console.log('Creating location...');
        Location.create(req.body)
        .then(newLocation => {
            console.log(newLocation);
            res.json(newLocation);
        })
        .catch(err => res.json(err));
    },

    allLocations: function(req, res){
        console.log("Retrieving locations...");
        Location.find()
        .then(locations => {
            res.json(locations);
        })
        .catch(err => res.json(err));
    },

    searchLocation: function(req, res){
        console.log("Searching for location...");
        Location.findById({
            _id: req.params.id
        })
        .then(location => {
            res.json(location);
        })
        .catch(err => res.json(err));
    },
    
    locationSearchBar: function(req, res){
        console.log('Searching for location...')
        Location.find({
            name: req.params.name
        })
        .then(location => {
            res.json(location);
        })
        .catch(err => res.json(err));
    },

    updateLocation: function(req, res){
        console.log("Updating Location...")
        Location.findByIdAndUpdate({
            _id: req.params.id
        })
        .then(updatedLocation => {
            res.json(updatedLocation);
        })
        .catch(err => res.json(err));
    },

    deleteLocation: function(req, res){
        console.log("Deleting location...")
        Location.findByIdAndDelete({
            _id: req.params.id
        })
        .then(deletedLocation => {
            res.send();
        })
        .catch(err => res.json(err));
    }

}
