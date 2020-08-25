const React = require('react');
const Layout = require('../components/Layout.jsx');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div className='formDiv'>
                <h1 className='newHeader'>New Log</h1>
                    <form action="/logs" method='POST'>
                        <label className='formLabel' htmlFor="date">Date</label>
                        <input className='formInput' type="datetime-local" name="date" id="date" required={true} /><br />
                        <label className='formLabel' htmlFor="title">Title</label>
                        <input className='formInput' type="text" name="title" id="title" required={true} autoComplete='off' /><br />
                        <label className='formLabel' htmlFor="bw">Body Weight in Pounds</label>
                        <input className='formInput' type="number" name="bodyWeight" id="bw" /><br />
                        <label className='formLabel' htmlFor="description">Description</label>
                        <textarea className='formInput' name="description" id="description" cols="30" rows="5"></textarea><br />
                        <label className='formLabel' htmlFor="color">Color</label>
                        <input className='formInput colorInput' type="color" name="color" id="color" /><br />
                        <input className='formInput formSubmit' type="submit" />
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;