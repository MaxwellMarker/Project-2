const React = require('react');
const Layout = require('../components/Layout.jsx');

class Index extends React.Component {
    render(){
        const logs = this.props.logs;
        const sorter = (a, b) => {
            return Date.parse(b.date) - Date.parse(a.date)
        };
        logs.sort(sorter);
        return(
            <Layout>
                <div>
                    <h1>Workout Log</h1>
                </div>
                <div>
                    <a href='/logs/templates'>
                        <div>
                            <h1>Log New Workout</h1>
                        </div>
                    </a>
                    {logs.map((log) => {
                        return(
                            <a href={`logs/${log._id}`} key={log._id}>
                                <div style={{'border': `solid 5px ${log.color}`}}>
                                    <h1>{log.date.toDateString()}</h1>
                                    <h2>{log.title}</h2>
                                    <p>{log.description}</p>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                        <input type="submit" value="Delete"/>
                                    </form>
                                </div>
                            </a>
                        )
                    })}
                    {/* {logs[0] ? `${logs.map((log) => {
                        return(
                            <a href={`logs/new/${log._id}`} key={log._id}>
                                <div>
                                    <h1>{log.date}</h1>
                                    <h2>{log.title}</h2>
                                    <p>{log.description}</p>
                                </div>
                            </a>
                        )
                    })}` : ''} */}
                </div>
            </Layout>
        )
    }
}

module.exports = Index;