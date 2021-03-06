const express = require('express');
const router = express.Router();
const Record = require('../models/records.js');
const Log = require('../models/logs.js')
let recordVariable = false;

//Index
router.get('/', (req, res) => {
    Record.find({}, (error, records) => {
        res.render('records/Index', {
            records: records
        })
    })
})
//New
router.get('/choose', (req, res) => {
    res.render('records/Choose')
})
router.get('/finder', (req, res) => {
    res.render('records/Finder')
})
router.get('/new', (req, res) => {
    res.render('records/New', {
        record: recordVariable
    })
    recordVariable = false;
})
//New PR / PR Finder//
router.post('/new', (req, res) => {
    if (req.body.name && req.body.reps) {
        Log.find({}, (error, logs) => {
            const exerciseArray = [];
            logs.map((log) => {
                log.routine.map((exercise) => {
                    console.log(req.body);
                    if (exercise.name) {
                        if (exercise.name.toLowerCase() === req.body.name.toLowerCase()) {
                            exerciseArray.push(exercise)
                        }
                    }
                })
            })
            const recordArray = [];
            exerciseArray.map((exercise) => {
                exercise.sets.map((set) => {
                    if (parseInt(set.reps) === parseInt(req.body.reps)) {
                        recordArray.push(set)
                    }
                })
            })
            const sorter = (a, b) => {
                return b.weight - a.weight;
            }
            recordArray.sort(sorter)
            recordVariable = recordArray[0]
            res.redirect('/prs/New')
        })
    } else {
        res.redirect('/prs/New')
    }
})
//Delete
router.delete('/:id', (req, res) => {
    Record.findByIdAndDelete(req.params.id, (error, deleted) => {
        res.redirect('/prs')
    })
})
//Update
router.put('/:id', (req, res) => {
    Record.findByIdAndUpdate(req.params.id, req.body, (error, record) => {
        res.redirect('/prs');
    })
})
//Create
router.post('/', (req, res) => {
    Record.create(req.body, (error, record) => {
        res.redirect('/prs');
    })
})
//Edit
router.get('/:id/edit', (req, res) => {
    Record.findById(req.params.id, (error, record) => {
        res.render('records/Edit', {
            record: record
        })
    })
})
module.exports = router;