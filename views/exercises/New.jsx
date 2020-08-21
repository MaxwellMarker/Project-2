const React = require('react');
const Layout = require('../components/Layout.jsx');

class New extends React.Component {
    render(){
        const log = this.props.log;
        return(
            <Layout>
                <div>
                    <form action={`/logs/${log._id}`} method='POST'>
                        <label htmlFor="name">Exercise Name</label>
                        <input type="text" name="name" id="name"/><br/>
                        <label htmlFor="sets">Expected Sets</label>
                        <input type="number" name="sets" id="sets"/><br/>
                        <label htmlFor="reps">Expected Reps per Set</label>
                        <input type="number" name="reps" id="reps"/><br/>
                        <label htmlFor="weight">Expected Weight in Pounds</label>
                        <input type="number" name="weight" id="weight"/><br/>
                        <label htmlFor="notes">Notes</label>
                        <textarea name="notes" id="notes" cols="30" rows="5"></textarea>
                        <input type="submit"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;