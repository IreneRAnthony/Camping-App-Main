const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    name: { type: String, require: true },
    destination: { type: String, require: true },
    start_date: {type: Date},
    end_date: {type: Date},
    going: {type: Array},
    creator: {type: String},
    supply_list: {type: Array},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, {timestamp: true})
mongoose.model('Trip', TripSchema);
