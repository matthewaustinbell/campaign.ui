import React, { Component } from 'react';
import './Home.scss';
import adsense1 from '../../photos/adsensephoto1.PNG';
import adsense2 from '../../photos/adsensephoto2.PNG';
import Header from '../Header/Header';
import Player from '../Player/Player';
import UserData from '../../data/userData';
 

class Home extends Component {
  state = {
    players : '',
    newUser : '',
    id : '',
    name : '',
    email : '',
    donationTotal : ''
  }
    incorrect_AnswerClick = () => {
      console.log('you clicked an incorrect answer');
      }
    render () {
        const question = this.props.question;
        const user = this.props.user;
        let questionName = '';
        if( Object.keys(question).length){
        questionName = (
        <div className="singleQuestion">
            {/* Question */}
            <h2 className="questionQuestion">{question.question}</h2>
            {/* Answers */}
            <button className="counter-action increment"onClick={this.props.correct_AnswerClick}>{question.correct_answer}</button>
            <button className="counter-action decrement"onClick={this.incorrect_AnswerClick}>{question.incorrect_answers[0]}</button>
            <button className="counter-action decrement"onClick={this.incorrect_AnswerClick}>{question.incorrect_answers[1]}</button>
            <button className="counter-action decrement"onClick={this.incorrect_AnswerClick}>{question.incorrect_answers[2]}</button> 
        </div> )
        }
        return (
          <div className="Home">
            <div className="row">
              <div className="col">
              {questionName}
            </div>
            <div className="col">
            <div className="title">
                  <header className="top">
                    <h1>Time Donated : {user.donationTotal} </h1>
                    <h3 className="tagline">
                      {/* <span>Your Doing Great!</span> */}
                    </h3>
                  </header>
                </div>
                <img src={adsense1} alt="a google add" width="300" height="200" />
            </div>
            <div className="col">
               <img src={adsense2} alt="a google add" width="300" height="200" />  
            </div>
          </div>
        </div>
      );
    }
}

export default Home;