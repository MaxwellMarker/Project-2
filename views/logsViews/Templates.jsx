const React = require('react');
const Layout = require('../components/Layout.jsx');
const { mapReduce } = require('../../models/logs.js');

class Templates extends React.Component {
    render() {
        const logs = this.props.logs;
        const sorter = (a, b) => {
            return Date.parse(b.date) - Date.parse(a.date)
        };
        logs.sort(sorter);
        return (
            <Layout>
                <div>
                    <div>
                        <h1>Copy one of your previous workouts or start from scratch</h1>
                    </div>
                    <div>
                        <a href="/logs/new">
                            <div>
                                <h1>Start from scratch</h1>
                            </div>
                        </a>
                        {logs.map((log) => {
                            return (
                                <a href={`/logs/new/${log._id}`} key={log._id}>
                                    <div style={{ 'backgroundColor': log.color }}>
                                        <h1>{log.date.toDateString()}</h1>
                                        <h2>{log.title}</h2>
                                        <p>{log.description}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Templates;