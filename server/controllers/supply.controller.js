const mongoose = require('mongoose');
require('../models/supply.model')
const Supply = mongoose.model('Supply');

module.exports = {
    createSupply: function(req, res){
        console.log('Creating supply...')
        Supply.create(req.body)
        .then(newSupply => {
            res.json(newSupply)
        })
        .catch(err => res.json(err))
    },

    getSupply: function(req, res){
        console.log('Getting supply...')
        Supply.find({
            trip_id: req.params.id
        })
        .then(supply => {
            res.json(supply)
        })
        .catch(err => res.json(err))
    },

    updateSupply: function(req, res){
        console.log('Updating supply...')
        Supply.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedSupply => {
            res.json(updatedSupply);
        })
        .catch(err => res.json(err))
    },

    deleteSupply: function(req, res){
        console.log('Deleting supply...')
        Supply.findByIdAndDelete(req.params.id)
        .then(deletedSupply => {
            console.log(deletedSupply)
            res.send();
        })
        .catch(err => res.json(err))
    }

}
