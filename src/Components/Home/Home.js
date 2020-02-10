import React, { Component } from 'react';
import './Home.scss';

import questionData from '../../data/questionData';
import UserData from '../../data/userData';
import userData from '../../data/userData';
import { app } from 'firebase';
import QuestionData from '../../data/questionData';


// make a build answers function
// when you get the answers save it to state

const defaultUser = {
  id : '',
  name : '',
  email : '',
  donationTotal : ''
}

class Home extends Component {
  state = {
    newUser : '',
  }
  
    correct_AnswerClick = () => {
      //passing id here
      questionData.getOneQuestion()
      .then(response => this.setState({question : response}))
      userData.updateUserScore(1) 
      .then((Response)=>{
        // this.setstate
        console.error(Response.donationTotal);
      })
      .catch(error=>console.error(error));
      console.log('you clicked a correct answer');
      }
    incorrect_AnswerClick = () => {
      console.log('you clicked an incorrect answer');
      }
    render () {
        const question = this.props.question;
        const user = this.props.user;
        //console.error('this is my question object', question);
        let questionName = '';
        //object.keys returns the keys of the object in a string, since the length is 0 before it loads 
        // 0 is false, if it returns false dont run block of code, if true run below code.
        if( Object.keys(question).length){
            // console.log(question.incorrect_answers[0])
        questionName = (
        <div className="singleQuestion">
            {/* Question */}
            <h2 className="questionQuestion">{question.question}</h2>
            {/* Answers */}
            <button className="questionQuestion"onClick={this.correct_AnswerClick}>{question.correct_answer}</button>
            <button className="questionQuestion"onClick={this.incorrect_AnswerClick}>{question.incorrect_answers[0]}</button>
            <button className="questionQuestion"onClick={this.incorrect_AnswerClick}>{question.incorrect_answers[1]}</button>
            <button className="questionQuestion"onClick={this.incorrect_AnswerClick}>{question.incorrect_answers[2]}</button> 
        </div> )
        }
      return (
        <div className="Home">
        <div className="questionContainer">
        {questionName}
        </div>
        <div className="donationContainer"> 
        <h3>Time Donated : {user.donationTotal} </h3>
        </div>
    </div>
      );
    }
}

export default Home;