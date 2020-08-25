const React = require('react');
const Layout = require('../components/Layout.jsx');

class Index extends React.Component {
    render() {
        const records = this.props.records;
        const sorter = (a, b) => {
            return Date.parse(b.date) - Date.parse(a.date)
        };
        records.sort(sorter);
        return (
            <Layout>
                <div className='logIndexHeader'>
                    <h1>Personal Records</h1>
                </div>
                <div>
                    <div className='newLogLink'>
                        <a href='/prs/choose'>
                            <h2 className='newLinkText'>Log New PR</h2>
                        </a>
                    </div>
                    {records.map((pr) => {
                        return (
                            <div className='logIndexContainer' key={pr._id} style={{ 'border': `solid 5px ${pr.color}`, 'backgroundColor': pr.color + '66' }}>
                                <div className='logIndexInner'>
                                    <h1 className='logIndexItemTitle'>{pr.name}</h1>
                                    <h2>{pr.date.toDateString()}</h2>
                                    {pr.weight && pr.reps
                                        ? <h2>{pr.weight} lbs for {pr.reps} {pr.reps === 1 ? 'rep' : 'reps'}</h2>
                                        : ''
                                    }
                                    <p className='indexP'>{pr.description}</p>
                                    <form action={`/prs/${pr._id}?_method=DELETE`} method='POST'>
                                        <input className='deleteIndex' type="submit" value="Delete" />
                                    </form>
                                    <a className='editIndex' href={`/prs/${pr._id}/edit`}>Edit Info</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}

module.exports = Index;