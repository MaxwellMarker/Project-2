const React = require('react');
const Layout = require('../components/Layout.jsx');

class NewCopy extends React.Component {
    render() {
        const log = this.props.log;
        return (
            <Layout>
                <div className='formDiv'>
                    <h1 className='newHeader'>New Log</h1>
                    <form action="/logs" method='POST'>
                        <label className='formLabel' htmlFor="date">Date</label>
                        <input className='formInput' type="datetime-local" name="date" id="date" required={true} /><br />
                        <label className='formLabel' htmlFor="title">Title</label>
                        <input className='formInput' type="text" name="title" id="title" defaultValue={log.title} required={true} autoComplete='off' /><br />
                        <label className='formLabel' htmlFor="bw">Body Weight in Pounds</label>
                        <input className='formInput' type="number" name="bodyWeight" id="bw" defaultValue={log.bodyWeight} /><br />
                        <label className='formLabel' htmlFor="description">Description</label>
                        <textarea className='formInput' name="description" id="description" cols="30" rows="5" defaultValue={log.description}></textarea><br />
                        <label className='formLabel' htmlFor="color">Color</label>
                        <input className='formInput colorInput' type="color" name="color" id="color" defaultValue={log.color} /><br />
                        <input type="hidden" name="prevId" value={log._id} />
                        <div className='cancelSubmitBox'>
                            <a className='formInput formCancel' href="/logs">Cancel</a>
                            <input className='formInput formSubmit' type="submit" />
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = NewCopy;