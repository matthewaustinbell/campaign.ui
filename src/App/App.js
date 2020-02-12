import React from 'react';
//import React, { Component } from 'react'
import firebase from 'firebase/app';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';
import MyNavbar from '../Components/MyNavbar/MyNavbar';
import './App.scss'
import UserData from '../data/userData';
import QuestionData from '../data/questionData';
import fbConnection from '../helpers/data/connection';
import getMyQuestion from '../helpers/data/question';


fbConnection();

class App extends React.Component {
 state = {
      authed: false,
      question: {},
      user: {},
    }

    componentDidMount() {
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ authed: true });
        } else {
          this.setState({ authed: false });
        }
      });
    }
  
    componentWillUnmount() {
      this.removeListener();
    }

  handleClick = () => {
    // getMyQuestion();
    QuestionData.getOneQuestion()
    .then(response => this.setState({question : response})) 
    .then(()=>{
      UserData.getSingleUser(1)
      .then(response => this.setState({user : response.data}))
    }) 
  }
  
  correct_AnswerClick = () => {
    //passing id here
    QuestionData.getOneQuestion()
      .then(response => this.setState({question : response}))
    UserData.updateUserScore(1) 
      .then((Response)=>{
        // this.setstate
        console.error(Response.data);
    })
    .catch(error=>console.error(error));
    console.log('you clicked a correct answer');
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <MyNavbar authed={authed} />
      }
      return <Auth />; 
    };
    return (
      <div>
        <div className="App">
          <MyNavbar authed={authed} />
        {loadComponent()}
        <Auth />
        {/* <button className="btn btn-danger">Campaign</button> */}
        </div>
        <div className='button__container'>
          <h1 className='questionText'>Campaign</h1>
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button> 
          <Home question={this.state.question} 
          user={this.state.user}
          correct_AnswerClick={this.correct_AnswerClick} />
        </div>
        <p>{this.state.username}</p>
      </div>
    );
  }
}
export default App;
