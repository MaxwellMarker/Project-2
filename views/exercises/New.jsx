const React = require('react');
const Layout = require('../components/Layout.jsx');

class New extends React.Component {
    render(){
        const log = this.props.log;
        return(
            <Layout>
                <div>
                    <form action={`/logs/${log._id}`} method='POST'>
                        <h2>Required</h2>
                        <label htmlFor="name">Exercise Name</label>
                        <input type="text" name="name" id="name" required/><br/>
                        <h2>Optional</h2>
                        <label htmlFor="sets">Expected Sets</label>
                        <input type="number" name="sets" id="sets"/><br/>
                        <label htmlFor="reps">Expected Reps per Set</label>
                        <input type="number" name="reps" id="reps"/><br/>
                        <label htmlFor="weight">Expected Weight in Pounds</label>
                        <input type="number" name="weight" id="weight"/><br/>
                        <label htmlFor="notes">Description</label>
                        <textarea name="notes" id="notes" cols="30" rows="5"></textarea>
                        <input type="hidden" name="position" value={log.routine.length}/>
                        <input type="hidden" name="date" value={log.date}/>
                        <input type="hidden" name="bodyWeight" value={log.bodyWeight}/>
                        <input type="hidden" name="color" value={log.color}/>
                        <input type="submit"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;