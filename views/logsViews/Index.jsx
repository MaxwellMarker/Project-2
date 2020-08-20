const React = require('react');
const Layout = require('../components/Layout.jsx');

class Index extends React.Component {
    render(){
        const logs = this.props.logs;
        return(
            <Layout>
                <div>
                    <h1>Workout Log</h1>
                </div>
                <div>
                    <a href='logs/new'>
                        <div>
                            <h1>Log New Workout</h1>
                        </div>
                    </a>
                    {logs.map((log) => {
                        return(
                            <a key={log.id}>
                                <div>
                                    <h1>{log.date}</h1>
                                    <h2>{log.title}</h2>
                                    <p>{log.description}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}

module.exports = Index;