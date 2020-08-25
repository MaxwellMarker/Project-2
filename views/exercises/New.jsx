const React = require('react');
const Layout = require('../components/Layout.jsx');

class New extends React.Component {
    render() {
        const log = this.props.log;
        return (
            <Layout>
                <div className='formDiv'>
                    <h1 className='newHeader'>New Exercise</h1>
                    <form action={`/logs/${log._id}`} method='POST'>
                        <h2 className='formReqInfo'>Required</h2>
                        <label className='formLabel' htmlFor="name">Exercise Name</label>
                        <input className='formInput' type="text" name="name" id="name" required='true' autoComplete='off' /><br />
                        <h2 className='formReqInfo'>Optional</h2>
                        <label className='formLabel' htmlFor="sets">Expected Sets</label>
                        <input className='formInput' type="number" name="sets" id="sets" /><br />
                        <label className='formLabel' htmlFor="reps">Expected Reps per Set</label>
                        <input className='formInput' type="number" name="reps" id="reps" /><br />
                        <label className='formLabel' htmlFor="weight">Expected Weight in Pounds</label>
                        <input className='formInput' type="number" name="weight" id="weight" /><br />
                        <label className='formLabel' htmlFor="notes">Description or Notes</label>
                        <textarea className='formInput' name="notes" id="notes" cols="30" rows="5"></textarea>
                        <input type="hidden" name="position" value={log.routine.length} />
                        <input type="hidden" name="date" value={log.date} />
                        <input type="hidden" name="bodyWeight" value={log.bodyWeight} />
                        <input type="hidden" name="color" value={log.color} />
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

module.exports = New;