const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    },
    bodyWeight: {
        type: Number
    },
    color: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;