const React = require('react');
const Layout = require('../components/Layout.jsx');

class Edit extends React.Component {
    render() {
        const log = this.props.log;
        return (
            <Layout>
                <div>
                    <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                        <label htmlFor="date">Date: original was {log.date.toDateString()} {log.date.toLocaleTimeString()}</label>
                        <input type="datetime-local" name="date" id="date" required={true} defaultValue={`${log.date.getFullYear()}-${log.date.getMonth() < 9 ? '0' : ''}${log.date.getMonth() + 1}-${log.date.getDate() < 10 ? '0' : ''}${log.date.getDate()}T${log.date.getHours() < 10 ? '0' : ''}${log.date.getHours()}:${log.date.getMinutes() < 10 ? '0' : ''}${log.date.getMinutes()}`} /><br />
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" defaultValue={log.title} /><br />
                        <label htmlFor="bw">Body Weight in Pounds</label>
                        <input type="number" name="bodyWeight" id="bw" defaultValue={log.bodyWeight} /><br />
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5" defaultValue={log.description}></textarea><br />
                        <label htmlFor="color">Color</label>
                        <input type="color" name="color" id="color" defaultValue={log.color} /><br />
                        <input type="submit" />
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;