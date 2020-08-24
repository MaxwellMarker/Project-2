const mongoose = require('mongoose');

const prSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String},
    reps: {type: Number},
    weight: {type: Number},
    bodyWeight: {type: Number},
    color: {type: String, required: true}
},{timestamps: true})

const Pr = mongoose.model('Pr', prSchema);

module.exports = Pr;