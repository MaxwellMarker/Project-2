const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    color: {type: String, required: true},
    exercises: {type: Array}
},{timestamps: true})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;