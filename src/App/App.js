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
  QuestionData.getOneQuestion()
    .then(response => this.setState({question : response}))
  }
  render () {
    return (
      <div className='button__container'>
        <h1 className='questionText'>Camp.aign</h1>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
        <Home question={this.state.question} />
      </div>
    )
  }
}
export default App
