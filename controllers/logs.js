const express = require('express');
const router = express.Router();
const Log = require('../models/logs.js');
const sorter = (a, b) => {
    return a.position - b.position;
}

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
router.delete('/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (error, logDel) => {
        res.redirect('/logs')
    })
})
router.delete('/:id/:position', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        const newRoutine = log.routine;
        newRoutine.sort(sorter);
        newRoutine.splice(req.params.position, 1)
        newRoutine.forEach((exercise) => {
            if(exercise.position > req.params.position){
                exercise.position--
            }
        })
        Log.findByIdAndUpdate(req.params.id, {$set:{routine: newRoutine}}, (error2, newLog) => {
            res.redirect(`/logs/${req.params.id}`)
        })
    })
})
//Update
router.put('/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body, (error, log) => {
        res.redirect('/logs')
    })
})
router.put('/:id/up', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        req.body.position = parseInt(req.body.position);
        const newRoutine = log.routine;
        newRoutine.sort(sorter);
        newRoutine[req.body.position].position--
        newRoutine[req.body.position - 1].position++
        Log.findByIdAndUpdate(req.params.id, {$set:{routine: newRoutine}}, (error, log) => {
            res.redirect(`/logs/${log._id}`);
        })
    })
})
router.put('/:id/down', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        req.body.position = parseInt(req.body.position);
        const newRoutine = log.routine;
        newRoutine.sort(sorter);
        newRoutine[req.body.position].position++
        newRoutine[req.body.position + 1].position--
        Log.findByIdAndUpdate(req.params.id, {$set:{routine: newRoutine}}, (error, log) => {
            res.redirect(`/logs/${log._id}`);
        })
    })
})
router.put('/:id/:position', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        const newRoutine = log.routine
        newRoutine.sort(sorter)
        const exercise = newRoutine[req.params.position]
        const newExercise = {
            name: req.body.name,
            notes: req.body.notes,
            sets: [],
            position: parseInt(req.params.position)
        }
        for(let i = 1; i <= exercise.sets.length; i++) {
            const set = {
                setNumber: i,
                reps: eval('req.body.reps' + i),
                weight: eval('req.body.weight' + i)
            }
            newExercise.sets.push(set);
        }
        newRoutine[req.params.position] = newExercise
        Log.findByIdAndUpdate(req.params.id, {$set:{routine: newRoutine}}, (error, log) => {
            res.redirect(`/logs/${req.params.id}`);
        })
    })
})
//Create
router.post('/', (req, res) => {
    if(req.body.prevId){
        Log.findById(req.body.prevId, (error, log) => {
            req.body.routine = log.routine;
            Log.create(req.body, (error, newLog) => {
                res.redirect('/logs');
            })
        })
    } else {
        Log.create(req.body, (error, newLog) => {
            res.redirect('/logs');
        })
    }
})
router.post('/:id', (req, res) => {
    const exercise = {
        name: req.body.name,
        sets: [],
        notes: req.body.notes,
        position: parseInt(req.body.position)
    }
    for (let i = 1; i <= req.body.sets; i++) {
        const set = {
            setNumber: i,
            weight: parseInt(req.body.weight),
            reps: parseInt(req.body.reps)
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
router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        res.render('logsViews/Edit', {
            log: log
        })
    })
})
router.get('/:id/:position/edit', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        const sortedRoutine = log.routine;
        sortedRoutine.sort(sorter);
        res.render('exercises/Edit', {
            exercise: sortedRoutine[req.params.position],
            log: log
        })
    })
})
//Show
router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (error, selectedLog) => {
        res.render('logsViews/Show', {
            log: selectedLog
        })
    })
})
module.exports = router;