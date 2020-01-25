import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.scss'

import QuestionData from '../data/questionData';
import Home from '../Components/Home/Home';

class App extends React.Component {
 state = {
      question: {}
    }

  handleClick = () => {
  QuestionData.getAllQuestions()
    .then(response => this.setState({question : response}))
  }
  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
        <h1 className='questionText'>testing</h1>
        <Home question={this.state.question} />
      </div>
    )
  }
}
export default App
