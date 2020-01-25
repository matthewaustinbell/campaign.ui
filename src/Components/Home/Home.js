import React, { Component } from 'react';
import './Home.scss';

import questionData from '../../data/questionData';

// make a build answers function
// when you get the answers save it to state

class Home extends Component {
    render () {
        const question = this.props.question
        let questionName = '';
        //object.keys returns the keys of the object in a string, since the length is 0 before it loads 
        // 0 is false, if it returns false dont run block of code, if true run below code.
        if( Object.keys(question).length){
            // console.log(question.incorrect_answers[0])
        questionName = (
        <div className="singleQuestion">
            <h2 className="questionQuestion">{question.category}</h2>
            <h2 className="questionQuestion">{question.type}</h2>
            <h2 className="questionQuestion">{question.difficulty}</h2>
            <h2 className="questionQuestion">{question.question}</h2>
            <h2 className="questionQuestion">{question.correct_answer}</h2>
            <h2 className="questionQuestion">{question.incorrect_answers[0]}</h2>
            <h2 className="questionQuestion">{question.incorrect_answers[1]}</h2>
        <h2 className="questionQuestion">{question.incorrect_answers[2]}</h2> 
        </div> )
        }
      return (
        <div className="Home">
        {/* <button className="btn btn-warning listbutton">List Your Stuff</button> */}
        <div className="questionContainer">
        {questionName}
        </div>
    </div>
      ); 
    }
}

export default Home;