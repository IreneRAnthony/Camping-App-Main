const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    priority: {type: String, default: 'Low'},
    creator: {type: String}
}, {timestamps: true})
mongoose.model('Task', TaskSchema);
