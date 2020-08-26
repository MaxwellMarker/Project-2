const React = require('react');
const Layout = require('../components/Layout.jsx');

class Edit extends React.Component {
    render() {
        const record = this.props.record;
        return (
            <Layout>
                <div className='formDiv'>
                    <form action={`/prs/${record._id}?_method=PUT`} method='POST'>
                        <h1 className='newHeader'>Edit PR</h1>
                        <label className='formLabel' htmlFor="date">Date</label>
                        <input className='formInput' type="datetime-local" name="date" id="date" required={true} defaultValue={`${record.date.getFullYear()}-${record.date.getMonth() < 9 ? '0' : ''}${record.date.getMonth() + 1}-${record.date.getDate() < 10 ? '0' : ''}${record.date.getDate()}T${record.date.getHours() < 10 ? '0' : ''}${record.date.getHours()}:${record.date.getMinutes() < 10 ? '0' : ''}${record.date.getMinutes()}`} /><br />
                        <label className='formLabel' htmlFor="name">Exercise Name</label>
                        <input className='formInput' type="text" name="name" id="name" required={true} defaultValue={record.name} /><br />
                        <label className='formLabel' htmlFor="reps">Reps</label>
                        <input className='formInput' type="number" name="reps" id="reps" defaultValue={record.reps} /><br />
                        <label className='formLabel' htmlFor="weight">Lifted Weight in Pounds</label>
                        <input className='formInput' type="number" name="weight" id="weight" defaultValue={record.weight} /><br />
                        <label className='formLabel' htmlFor="notes">Description / Notes</label>
                        <textarea className='formInput' name="description" id="notes" cols="30" rows="5" defaultValue={record.description}></textarea><br />
                        <label className='formLabel' htmlFor="bw">Body Weight in Pounds</label>
                        <input className='formInput' type="number" name="bodyWeight" id="bw" defaultValue={record.bodyWeight} /><br />
                        <label className='formLabel' htmlFor="color">Color</label>
                        <input className='formInput colorInput' type="color" name="color" id="color" defaultValue={record.color} required={true} /><br />
                        <div className='cancelSubmitBox'>
                            <a className='formInput formCancel' href="/prs">Cancel</a>
                            <input className='formInput formSubmit' type="submit" />
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;