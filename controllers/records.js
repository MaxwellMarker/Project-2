const express = require('express');
const router = express.Router();
const Record = require('../models/records.js');


//Index
router.get('/', (req, res) => {
    Record.find({}, (error, records) => {
        res.render('records/Index', {
            records: records
        })
    })
})
//New

//Delete

//Update

//Create

//Edit

module.exports = router;