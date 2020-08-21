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
        if (error) {
            console.log(error);
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
router.get('/new/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        res.render('logsViews/NewCopy', {
            log: log
        })
    })
})
router.get('/:id/new', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        res.render('exercises/New', {
            log: log
        })
    })
})
//Delete

//Update
//Create
router.post('/', (req, res) => {
    Log.create(req.body, (error, newLog) => {
        res.redirect('/logs');
    })
})
router.post('/:id', (req, res) => {
    const exercise = {
        name: req.body.name,
        sets: [],
        notes: req.body.notes
    }
    for (let i = 1; i <= req.body.sets; i++) {
        const set = {
            setNumber: i,
            weight: req.body.weight,
            reps: req.body.reps
        }
        exercise.sets.push(set);
    }
    Log.findByIdAndUpdate(req.params.id, {
        $push: {
            routine: exercise
        }
    }, (error, update) => {
        console.log(error, update);
        res.redirect(`/logs/${req.params.id}`);
    })
})
//Edit

//Show
router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (error, selectedLog) => {
        res.render('logsViews/Show', {
            log: selectedLog
        })
    })
})
module.exports = router;