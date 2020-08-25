const React = require('react');
const Layout = require('./components/Layout');

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1 className='homeSlogan'>The easy way to track your toughest workouts</h1>
                    <div className='formDiv homeDiv'>
                        <h2 className="homeTitle">Getting Started</h2>
                        <p className='homeParagraph'>Welcome to REST Day, an application for tracking and planning your workout routines. To get started with a workout log, head over to the 'Logs' tab on the navigation bar at the top of this page. If you would like to enter logs for your best lifts instead, then you can go to the 'PRs' tab.</p>
                        <h2 className='homeTitle'>Logs</h2>
                        <p className='homeParagraph'>On the 'Logs' page, you will see a list of all the workouts you have entered in order of the dates that you chose when you made the logs. The 'Log New Workout' button at the top allows you to add new workouts. If you have logged any workouts previously, they will be available to copy or you can start from scratch. The Edit Info button will allow you to change the basic info for your workouts as well as the styling colors them. Clicking on a workout will take you to a more in-depth view of the workout and allow you to edit the routine. There is a button to add exercises to your routine and once you have exercises added you can click them to edit their info.</p>
                        <h2 className='homeTitle'>Personal Records</h2>
                        <p className='homeParagraph'>The 'PRs' page shows all of your proudest lifting achievements. To add a new record, click the 'Log New PR' button. Next, it will ask you if you would like to start from scratch or use the 'PR Finder'. The 'PR Finder' allows you to search your logged workouts to find personal records. Once you have made some record logs, they can be edited and deleted much like the workouts in your 'Logs' tab.</p>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Home;