const React = require('react');
const Layout = require('../components/Layout.jsx');

class NewCopy extends React.Component {
    render(){
        const log = this.props.log;
        return(
            <Layout>
                <div>
                    <form action="/logs" method='POST'>
                        <label htmlFor="date">Date</label>
                        <input type="datetime-local" name="date" id="date" required={true}/><br/>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" defaultValue={log.title} required={true}/><br/>
                        <label htmlFor="bw">Body Weight in Pounds</label>
                        <input type="number" name="bodyWeight" id="bw" defaultValue={log.bodyWeight}/><br/>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5" defaultValue={log.description}></textarea><br/>
                        <label htmlFor="color">Color</label>
                        <input type="color" name="color" id="color" defaultValue={log.color}/><br/>
                        <input type="hidden" name="prevId" value={log._id}/>
                        <input type="submit"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = NewCopy;