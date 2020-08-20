const React = require('react');
const Layout = require('../components/Layout.jsx');
const { mapReduce } = require('../../models/logs.js');

class Templates extends React.Component {
    render() {
        const logs = this.props.logs;
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
                        {logs[0] ? `${logs.map((log) => {
                            return (
                                <a href={`/logs/new/${log._id}`} key={log._id}>
                                    <div>
                                        <h1>{log.date}</h1>
                                        <h2>{log.title}</h2>
                                    </div>
                                </a>
                            )
                        })}` : ''}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Templates;