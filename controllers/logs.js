const express = require('express');
const router = express.Router();
const Log = require('../models/logs.js');

//Index
router.get('/', (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.render('logsViews/Index', {
            logs: allLogs
        })
    })
})
//New
router.get('/templates', (req, res) => {
    Log.find({}, (error, allLogs) => {
        if(error){
            res.render('logsViews/Templates', {
                logs: []
            })
        } else {
            res.render('logsViews/Templates', {
                logs: allLogs
            })
        }
    })
})
router.get('/new', (req, res) => {
    res.render('logsViews/New')
})
//Delete

//Update

//Create

//Edit

//Show

module.exports = router;