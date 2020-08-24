const React = require('react');
const Layout = require('../components/Layout.jsx');

class Finder extends React.Component {
    render(){
        return(
            <Layout>
                <div>
                    <form action="/prs/new" method='POST'>
                        <label htmlFor="name">Exercise Name</label>
                        <input type="text" name="name" id="name"/><br/>
                        <label htmlFor="reps">Reps</label>
                        <input type="text" name="reps" id="reps"/><br/>
                        <a href="/prs/new">Skip</a><input type="submit" value="Find"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Finder;