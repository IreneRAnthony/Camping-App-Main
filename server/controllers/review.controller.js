const mongoose = require('mongoose');
require('../models/review.model')
const Review = mongoose.model('Review');

module.exports = {
    createReview: function(req, res){
        console.log('Creating review...');
        Review.create({
            review: req.body.review,
            stars: req.body.stars,
            location_id: req.params.id
        })
        .then(newReview => {
            console.log(newReview)
            res.json(newReview);
        })
        .catch(err => res.json(err));
    },

    getReview: function(req, res){
        console.log('Searching for reviews...')
        Review.find({
            location_id: req.params.id
        })
        .then(review => {
            res.json(review);
        })
        .catch(err => res.json(err))
    },

    updateReview: function(req, res){
        console.log('Updating review...', req.params.id)
        Review.findByIdAndUpdate(req.params.id, {
            $set: {
                review: req.body.review,
                stars: req.body.stars,
                location_id: req.params.id
                }
        })
    },

    deleteReview: function(req, res){
        console.log('Deleting review...', req.params.id)
        Review.findByIdAndDelete(req.params.id)
        .then(deletedReview => {
            res.send();
        })
        .catch(err => res.json(err))
    }

}