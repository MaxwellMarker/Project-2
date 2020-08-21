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
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;