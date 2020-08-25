const React = require('react');
const Layout = require('../components/Layout');

class Edit extends React.Component {
    render() {
        const exercise = this.props.exercise
        const log = this.props.log
        return (
            <Layout>
                <h1>Edit Exercise</h1>
                <form action={`/logs/${log._id}/${exercise.position}?_method=PUT`} method='POST'>
                    <label htmlFor="name">Exercise</label>
                    <input type="text" name="name" id="name" defaultValue={exercise.name} /><br />
                    <label htmlFor="notes">Description</label>
                    <textarea name="notes" id="notes" cols="30" rows="5" defaultValue={exercise.notes}></textarea>
                    {exercise.sets.map((set) => {
                        return (
                            <div key={set.setNumber}>
                                <h2>set {set.setNumber}</h2>
                                <label htmlFor={`reps${set.setNumber}`}>Reps</label>
                                <input type="number" name={`reps${set.setNumber}`} id={`reps${set.setNumber}`} defaultValue={set.reps} /><br />
                                <label htmlFor={`weight${set.setNumber}`} >Weight</label>
                                <input type="number" name={`weight${set.setNumber}`} id={`weight${set.setNumber}`} defaultValue={set.weight} /><br />
                            </div>
                        )
                    })}
                    <h2><a href={`/logs/${log._id}`}>Cancel</a></h2><input type="submit" />
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;