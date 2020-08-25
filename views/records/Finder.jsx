const React = require('react');
const Layout = require('../components/Layout.jsx');

class Finder extends React.Component {
    render() {
        return (
            <Layout>
                <div className='logIndexHeader'>
                    <h1>PR Finder</h1>
                </div>
                <div className='formDiv'>
                    <form action="/prs/new" method='POST'>
                        <label className='formLabel' htmlFor="name">Exercise Name</label>
                        <input className='formInput' type="text" name="name" id="name" autoComplete='off' /><br />
                        <label className='formLabel' htmlFor="reps">Reps</label>
                        <input className='formInput' type="text" name="reps" id="reps" autoComplete='off' /><br />
                        <div className='cancelSubmitBox'>
                            <a className='formInput formCancel' href="/prs/new">Skip</a>
                            <input className='formInput formSubmit' type="submit" value="Find" />
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Finder;