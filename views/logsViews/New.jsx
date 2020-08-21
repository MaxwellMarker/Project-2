const React = require('react');
const Layout = require('../components/Layout.jsx');

class New extends React.Component {
    render(){
        return(
            <Layout>
                <div>
                    <form action="/logs" method='POST'>
                        <label htmlFor="date">Date</label>
                        <input type="datetime-local" name="date" id="date"/><br/>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title"/><br/>
                        <label htmlFor="bw">Body Weight in Pounds</label>
                        <input type="number" name="bodyWeight" id="bw"/><br/>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="10"></textarea><br/>
                        <label htmlFor="color">Color</label>
                        <input type="color" name="color" id="color"/><br/>
                        <input type="submit"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;