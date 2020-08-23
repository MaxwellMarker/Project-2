const React = require('react');
const Layout = require('../components/Layout');

class Edit extends React.Component {
    render(){
        const exercise = this.props.exercise
        console.log(exercise);
        return(
            <Layout>
                <h1>Edit Exercise</h1>
                <h2>{exercise.name}</h2>
                {exercise.sets.map((set) => {
                    return(
                        <div>
                            <h2>{set.setNumber}</h2>
                            <h2>{set.reps} {set.weight}</h2>
                        </div>
                    )
                })}
            </Layout>
        )
    }
}

module.exports = Edit;