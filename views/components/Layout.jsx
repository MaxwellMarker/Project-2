const React = require('react');

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <base href="/"/>
                    <link rel="stylesheet" href="css/style.css"/>
                    <title>REST Day</title>
                </head>
                <body>
                    <div>
                        <h1>REST Day</h1>
                        <a href="/">Home</a>
                        <a href="/logs">Logs</a>
                    </div>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;