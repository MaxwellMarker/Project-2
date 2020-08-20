const express = require('express');
const router = express.Router();
const Log = require('../models/logs.js');

//Index
router.get('/', (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.render('logs/Index', {
            logs: allLogs
        })
    })
})
//New

//Delete

//Update

//Create

//Edit

//Show

module.exports = router;