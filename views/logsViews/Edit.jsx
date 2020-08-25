const React = require('react');
const Layout = require('../components/Layout.jsx');

class Edit extends React.Component {
    render() {
        const log = this.props.log;
        return (
            <Layout>
                <div className='formDiv'>
                <h1 className='newHeader'>Edit Workout</h1>
                    <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                        <label className='formLabel' htmlFor="date">Date: original was {log.date.toDateString()} {log.date.toLocaleTimeString()}</label>
                        <input className='formInput' type="datetime-local" name="date" id="date" required={true} defaultValue={`${log.date.getFullYear()}-${log.date.getMonth() < 9 ? '0' : ''}${log.date.getMonth() + 1}-${log.date.getDate() < 10 ? '0' : ''}${log.date.getDate()}T${log.date.getHours() < 10 ? '0' : ''}${log.date.getHours()}:${log.date.getMinutes() < 10 ? '0' : ''}${log.date.getMinutes()}`} /><br />
                        <label className='formLabel' htmlFor="title">Title</label>
                        <input className='formInput' type="text" name="title" id="title" defaultValue={log.title} /><br />
                        <label className='formLabel' htmlFor="bw">Body Weight in Pounds</label>
                        <input className='formInput' type="number" name="bodyWeight" id="bw" defaultValue={log.bodyWeight} /><br />
                        <label className='formLabel' htmlFor="description">Description</label>
                        <textarea className='formInput' name="description" id="description" cols="30" rows="5" defaultValue={log.description}></textarea><br />
                        <label className='formLabel' htmlFor="color">Color</label>
                        <input className='formInput colorInput' type="color" name="color" id="color" defaultValue={log.color} /><br />
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

module.exports = Edit;