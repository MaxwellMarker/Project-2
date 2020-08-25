const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <base href="/" />
                    <link rel="stylesheet" href="css/style.css" />
                    <title>REST Day</title>
                </head>
                <body>
                    <div className='allHeader'>
                        <h1 className='headerTitle'>REST Day</h1>
                        <div className='headerNav'>
                            <a href="/" className='headerLink'>Home</a>
                            <a href="/logs" className='headerLink'>Logs</a>
                            <a href="/prs" className='headerLink'>PRs</a>
                        </div>
                    </div>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;