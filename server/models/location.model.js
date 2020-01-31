const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    url: {type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, {timestamp: true})
mongoose.model('Location', LocationSchema);
