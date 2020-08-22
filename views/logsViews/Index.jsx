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
                <div className='logIndexHeader'>
                    <h1>Workout Log</h1>
                </div>
                <div>
                    <div className='newLogLink'>
                        <a href='/logs/templates'>
                            <h2 className='newLinkText'>Log New Workout</h2>
                        </a>
                    </div>
                    {logs.map((log) => {
                        return(
                            <a href={`logs/${log._id}`} key={log._id}>
                                <div className='logIndexContainer' style={{'border': `solid 5px ${log.color}`, 'backgroundColor': log.color + '66'}}>
                                    <h1>{log.date.toDateString()}</h1>
                                    <h2>{log.date.toLocaleTimeString()}</h2>
                                    <h2>{log.title}</h2>
                                    <p>{log.description}</p>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                        <input type="submit" value="Delete"/>
                                    </form>
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