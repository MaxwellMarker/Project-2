const React = require('react');
const Layout = require('../components/Layout.jsx');

class Show extends React.Component {
    render() {
        const log = this.props.log;
        // const sameSet = (set) => set === exer.sets[0]
        return (
            <Layout>
                <div className='logShowContainer' style={{'border': `solid 5px ${log.color}`, 'backgroundColor': log.color + '66'}}>
                    <div className='showWorkoutInfo'>
                        <h1>{log.date.toDateString()}</h1>
                        <h2>{log.title}</h2>
                        <h2>Body Weight: {log.bodyWeight} lbs</h2>
                        <p>{log.description}</p>
                    </div>
                    <div>
                        <h2>Routine</h2>
                        {log.routine.map((exer) => {
                            const sameSet = (set) => set === exer.sets[0]
                            return (
                                <div>
                                    <h2>{exer.name}</h2>
                                    {exer.sets.every(sameSet)
                                        ? (exer.sets.map((set) => {
                                            return (
                                                <div>
                                                    <h3>set {set.setNumber}: {set.weight} lbs for {set.reps} {set.reps > 1 ? 'reps' : 'rep'}</h3>
                                                </div>
                                            )
                                        }))
                                        : <h3>{exer.sets[0].weight} lbs for {exer.sets.length} sets of {exer.sets[0].reps} {exer.sets[0].reps > 1 ? 'reps' : 'rep'}</h3>}
                                </div>
                            )
                        })}
                        <a href={`/logs/${log._id}/new`}><h2>Add</h2></a>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;