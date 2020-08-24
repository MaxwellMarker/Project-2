const React = require('react');
const Layout = require('../components/Layout.jsx');
const { set } = require('mongoose');

class Show extends React.Component {
    render() {
        const log = this.props.log;
        const sorter = (a, b) => {
            return a.position - b.position;
        }
        log.routine.sort(sorter)
        // const sameSet = (set) => set === exer.sets[0]
        return (
            <Layout>
                <div className='logShowContainer' style={{ 'border': `solid 5px ${log.color}`, 'backgroundColor': log.color + '66' }}>
                    <div className='showWorkoutInfo' style={{ 'border': `solid 5px ${log.color}00`, 'backgroundColor': log.color + '66' }}>
                        <h1 className='showDate'>{log.date.toDateString()}</h1>
                        <div className='showInfo'>
                            <h2>{log.date.toLocaleTimeString()}</h2>
                            <h2>{log.title}</h2>
                            {log.bodyWeight
                                ? <h2>Body Weight: {log.bodyWeight} lbs</h2>
                                : ''
                            }
                            <p>{log.description}</p>
                        </div>
                    </div>
                    <div className='showRoutine' style={{ 'border': `solid 5px ${log.color}00`, 'backgroundColor': log.color + '66' }}>
                        <h2 className='routineHeader'>Routine</h2>
                        {log.routine.map((exer) => {
                            const sameReps = (set) => { return set.reps === exer.sets[0].reps }
                            const sameWeight = (set) => { return set.weight === exer.sets[0].weight }
                            return (
                                <div className='routineItem' key={exer.name}>
                                    <a className='editLink' href={`/logs/${log._id}/${exer.position}/edit`}>
                                        <h2>{exer.name}</h2>
                                        {exer.sets[0]
                                            ? exer.sets.every(sameReps) && exer.sets.every(sameWeight)
                                                ? <h3>{exer.sets[0].weight} lbs for {exer.sets.length} sets of {exer.sets[0].reps} {exer.sets[0].reps > 1 ? 'reps' : 'rep'}</h3>
                                                : (exer.sets.map((set) => {
                                                    return (
                                                        <div key={set.setNumber}>
                                                            <h3>set {set.setNumber}: {set.weight} lbs for {set.reps} {set.reps > 1 ? 'reps' : 'rep'}</h3>
                                                        </div>
                                                    )
                                                }))
                                            : ''
                                        }

                                        <h3>{exer.notes}</h3>
                                    </a>
                                    <form action={`/logs/${log._id}/${exer.position}?_method=DELETE`} method='POST'>
                                        <input className='showDelete' type="submit" value='delete' />
                                    </form>
                                    {exer.position === 0
                                        ? ''
                                        : <form action={`/logs/${log._id}/up?_method=PUT`} method='POST'>
                                            <input type="hidden" name="position" value={exer.position} />
                                            <input type="submit" value='' className='upButton mover' />
                                        </form>
                                    }
                                    <h4 className='move'>move</h4>
                                    {exer.position === log.routine.length - 1
                                        ? ''
                                        : <form action={`/logs/${log._id}/down?_method=PUT`} method='POST'>
                                            <input type="hidden" name="position" value={exer.position} />
                                            <input type="submit" value='' className='downButton mover' />
                                        </form>
                                    }
                                </div>
                            )
                        })}
                        <h2 className='showAdd'><a href={`/logs/${log._id}/new`}>Add</a></h2>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;