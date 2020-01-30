const mongoose = require('mongoose');

const SupplySchema = new mongoose.Schema({
    item: { type: String, required: true },
    status: {type: Boolean, default: false},
    trip_id: { type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, {timestamp: true})
mongoose.model('Supply', SupplySchema);