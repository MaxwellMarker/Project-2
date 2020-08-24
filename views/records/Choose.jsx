const React = require('react');
const Layout = require('../components/Layout.jsx');

class Choose extends React.Component {
    render(){
        return(
            <Layout>
                <div>
                    <a href="/prs/new">Start from scratch</a>
                    <a href="/prs/finder">Use PR Finder</a>
                </div>
            </Layout>
        )
    }
}

module.exports = Choose;