const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    bodyWeight: {
        type: Number
    },
    description: {
        type: String
    },
    routine: {
        type: Array
    }
}, {
    timestamps: true
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;