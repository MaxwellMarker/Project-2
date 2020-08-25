const React = require('react');
const Layout = require('../components/Layout.jsx');

class Edit extends React.Component {
    render() {
        const record = this.props.record;
        return (
            <Layout>
                <div>
                    <form action={`/prs/${record._id}?_method=PUT`} method='POST'>
                        <label htmlFor="date">Date</label>
                        <input type="datetime-local" name="date" id="date" required={true} defaultValue={`${record.date.getFullYear()}-${record.date.getMonth() < 9 ? '0' : ''}${record.date.getMonth() + 1}-${record.date.getDate() < 10 ? '0' : ''}${record.date.getDate()}T${record.date.getHours() < 10 ? '0' : ''}${record.date.getHours()}:${record.date.getMinutes() < 10 ? '0' : ''}${record.date.getMinutes()}`} /><br />
                        <label htmlFor="name">Exercise Name</label>
                        <input type="text" name="name" id="name" required={true} defaultValue={record.name} /><br />
                        <label htmlFor="reps">Reps</label>
                        <input type="number" name="reps" id="reps" defaultValue={record.reps} /><br />
                        <label htmlFor="weight">Lifted Weight in Pounds</label>
                        <input type="number" name="weight" id="weight" defaultValue={record.weight} /><br />
                        <label htmlFor="notes">Description / Notes</label>
                        <textarea name="description" id="notes" cols="30" rows="5" defaultValue={record.description}></textarea><br />
                        <label htmlFor="bw">Body Weight in Pounds</label>
                        <input type="number" name="bodyWeight" id="bw" defaultValue={record.bodyWeight} /><br />
                        <label htmlFor="color">Color</label>
                        <input type="color" name="color" id="color" defaultValue={record.color} required={true} /><br />
                        <input type="submit" />
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;