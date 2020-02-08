import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';
import MyNavbar from '../Components/MyNavbar/MyNavbar';
import './App.scss'


import QuestionData from '../data/questionData';
import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
 state = {
      authed: false,
      question: {}
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
  QuestionData.getOneQuestion()
    .then(response => this.setState({question : response}))
  }
  render () {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home question={this.state.question} />
      }
      return <Auth />
    };

    return (
      <div>
        <div className="App">
          <MyNavbar authed={authed} />
          {loadComponent()}
        </div>
        <div className='button__container'>
          <h1 className='questionText'>Campaign</h1>
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button> 
          <Home question={this.state.question} />
        </div>
      </div>
    );
  }
}
export default App;
