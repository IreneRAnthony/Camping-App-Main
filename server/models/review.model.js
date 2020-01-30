const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    review: { type: String, required: true },
    stars: {type: Number, required: true},
    location_id: { type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, {timestamp: true})
mongoose.model('Review', ReviewSchema);