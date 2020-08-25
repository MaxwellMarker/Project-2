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
                        <h1 className='logIndexHeader'>Copy one of your previous workouts or start from scratch</h1>
                    </div>
                    <div>
                        <div className='newLogLink'>
                            <a href="/logs/new">
                                <h1 className='newLinkText'>Start from scratch</h1>
                            </a>
                        </div>
                        {logs.map((log) => {
                            return (
                                <div className='logIndexContainer' style={{ 'border': `solid 5px ${log.color}`, 'backgroundColor': log.color + '66' }}>
                                    <a href={`/logs/new/${log._id}`} key={log._id}>
                                        <div className='logIndexInner'>
                                            <h1>{log.date.toDateString()}</h1>
                                            <h2>{log.date.toLocaleTimeString()}</h2>
                                            <h2>{log.title}</h2>
                                            <p>{log.description}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Templates;