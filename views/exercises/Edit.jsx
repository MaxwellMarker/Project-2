const React = require('react');
const Layout = require('../components/Layout');

class Edit extends React.Component {
    render() {
        const exercise = this.props.exercise
        const log = this.props.log
        return (
            <Layout>
                <div className='formDiv'>
                    <h1 className='newHeader'>Edit Exercise</h1>
                    <form action={`/logs/${log._id}/${exercise.position}?_method=PUT`} method='POST'>
                        <label className='formLabel' htmlFor="name">Exercise</label>
                        <input className='formInput' type="text" name="name" id="name" defaultValue={exercise.name} /><br />
                        <label className='formLabel' htmlFor="notes">Description or Notes</label>
                        <textarea className='formInput' name="notes" id="notes" cols="30" rows="5" defaultValue={exercise.notes}></textarea>
                        {exercise.sets.map((set) => {
                            return (
                                <div className='formSet' key={set.setNumber}>
                                    <h2 className='formReqInfo'>set {set.setNumber}</h2>
                                    <label className='formLabel' htmlFor={`reps${set.setNumber}`}>Reps</label>
                                    <input className='formInput setInput' type="number" name={`reps${set.setNumber}`} id={`reps${set.setNumber}`} defaultValue={set.reps} /><br />
                                    <label className='formLabel' htmlFor={`weight${set.setNumber}`} >Weight</label>
                                    <input className='formInput setInput' type="number" name={`weight${set.setNumber}`} id={`weight${set.setNumber}`} defaultValue={set.weight} /><br />
                                </div>
                            )
                        })}
                        <div>
                            <div>
                                <a href={`/logs/${log._id}/${exercise.position}/addset`}>Add Set</a>
                            </div>
                            <div>
                                <a href={`/logs/${log._id}/${exercise.position}/deleteset`}>Delete Set</a>
                            </div>
                        </div>
                        <div className='cancelSubmitBox'>
                            <a className='formInput formCancel' href={`/logs/${log._id}`}>Cancel</a>
                            <input className='formInput formSubmit' type="submit" />
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;