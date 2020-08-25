const React = require('react');
const Layout = require('./components/Layout');

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>The easy way to track your toughest workouts.</h1>
                </div>
            </Layout>
        )
    }
}

module.exports = Home;