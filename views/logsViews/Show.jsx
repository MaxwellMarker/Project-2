const React = require('react');
const Layout = require('../components/Layout.jsx');

class Show extends React.Component {
    render() {
        const log = this.props.log;
        return (
            <Layout>
                <div>
                    <h1>{log.date.toDateString()}</h1>
                    <h2>Body Weight: {log.bodyWeight} lbs</h2>
                    <h2>{log.title}</h2>
                    <h2>{log.description}</h2>
                </div>
                <div>
                    {log.exercises.map((exer) => {
                        return (
                            <h2>exercise</h2>
                        )
                    })}
                    <a href={`/logs/${log._id}/new`}><h2>Add</h2></a>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;