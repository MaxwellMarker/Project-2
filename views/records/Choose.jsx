const React = require('react');
const Layout = require('../components/Layout.jsx');

class Choose extends React.Component {
    render() {
        return (
            <Layout>
                <div style={{ 'marginTop': '50px' }}>
                    <div className='newLogLink'>
                        <a href="/prs/new">
                            <h2 className='newLinkText'>Start from scratch</h2>
                        </a>
                    </div>
                    <h2 className='logIndexHeader'>Or</h2>
                    <div className='newLogLink'>
                        <a href="/prs/finder">
                            <h2 className='newLinkText'>Use PR Finder</h2>
                        </a>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Choose;