const React = require('react');
const Layout = require('../components/Layout.jsx');

class Templates extends React.Component {
    render() {
        const record = this.props.record;
        return (
            <Layout>
                <div>
                    <div>
                        <h1>Use what we found based on your workout logs or start from scratch</h1>
                    </div>
                    <div>
                        <a href="/prs/new">
                            <div>
                                <h1>Start from scratch</h1>
                            </div>
                        </a>
                        <a href={`/prs/new`}>
                            <div style={{ 'backgroundColor': record.color }}>
                                <h1>{record.date.toDateString()}</h1>
                                <h2>{record.name}</h2>
                                <h2>{record.reps} reps</h2>
                                <h2>{record.weight} lbs</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Templates;