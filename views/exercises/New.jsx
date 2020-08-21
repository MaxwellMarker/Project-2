const React = require('react');
const Layout = require('../components/Layout.jsx');

class New extends React.Component {
    render(){
        const log = this.props.log;
        return(
            <Layout>
                <div>
                    <form action={`/logs/${log._id}`} method='POST'>
                        <label htmlFor="name">Exercise Name: </label>
                        <input type="text" name="name" id="name"/><br/>
                        <label htmlFor="sets">Sets: </label>
                        <input type="number" name="sets" id="sets"/><br/>
                        <label htmlFor="reps">Reps per Set: </label>
                        <input type="number" name="sets" id="sets"/><br/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;