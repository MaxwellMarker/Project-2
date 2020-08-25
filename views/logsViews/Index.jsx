const React = require('react');
const Layout = require('../components/Layout.jsx');

class Index extends React.Component {
    render() {
        const logs = this.props.logs;
        const sorter = (a, b) => {
            return Date.parse(b.date) - Date.parse(a.date)
        };
        logs.sort(sorter);
        return (
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
                        return (
                            <div className='logIndexContainer' key={log._id} style={{ 'border': `solid 5px ${log.color}`, 'backgroundColor': log.color + '66' }}>
                                <a className='showLink' href={`logs/${log._id}`} key={log._id}>
                                    <div className='logIndexInner'>
                                        <h1 className='logIndexItemTitle'>{log.date.toDateString()}</h1>
                                        <h2>{log.date.toLocaleTimeString()}</h2>
                                        <h2>{log.title}</h2>
                                        <p className='indexP'>{log.description}</p>
                                        <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                            <input className='deleteIndex' type="submit" value="Delete" />
                                        </form>
                                        <a className='editIndex' href={`/logs/${log._id}/edit`}>Edit Info</a>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}

module.exports = Index;