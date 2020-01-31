const mongoose = require('mongoose');
require('../models/supply.model')
const Supply = mongoose.model('Supply');

module.exports = {
    createSupply: function(req, res){
        console.log('Creating supply...')
        Supply.create({
            item: req.body.item,
            status: false,
            trip_id: req.params.id
        })
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
    
     findSupply: function(req, res){
        console.log('Finding supply...')
        Supply.findById(req.params.id)
        .then(supply => {
            res.json(supply)
        })
        .catch(err => res.json(err))
    },

    updateSupply: function(req, res){
        console.log('Updating supply...')
        Supply.findByIdAndUpdate(req.params.id, {
            $set: {
                item: req.body.title,
                status: req.body.status
            }
        })
        .then(updatedSupply => {
            res.json(updatedSupply);
        })
        .catch(err => res.json(err))
    },

    deleteSupply: function(req, res){
        console.log('Deleting supply...')
        Supply.findByIdAndDelete(req.params.id, req.body)
        .then(deletedSupply => {
            console.log(deletedSupply)
            res.send();
        })
        .catch(err => res.json(err))
    },

    completeSupply: function(req, res){
        console.log('Supply obtained!')
        Supply.findByIdAndUpdate(req.params.id, {
            status: true
        })
        .then(supply => {
            console.log('Finished!', supply.status)
            res.json(supply)
        })
        .catch(err => res.json(err))
    }

}
