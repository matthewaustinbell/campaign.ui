import React, { Component } from 'react';
import './Home.scss';

import questionData from '../../data/questionData';
import userData from '../../data/userData';
import adsense1 from '../../photos/adsensephoto1.PNG';
import adsense2 from '../../photos/adsensephoto2.PNG';

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
    //pass id here later
    userData.updateUserScore(1) 
    .then((Response)=>{
      // this.setstate
      console.error(Response.donationTotal);
    })
    .catch(error=>console.error(error));
    console.log('you clicked a correct answer');
    //first do a get method
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
        <img src={adsense1} alt="a google add" width="300" height="200" />
        <img src={adsense2} alt="a google add" width="300" height="200" />
    </div>
    </div>
      );
    }
}

export default Home;