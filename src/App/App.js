import React, { Component } from 'react'
import './App.scss'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    // axios.get('https://api.github.com/users/matthewaustinbell')
    axios.get('https://localhost:44322/api/opentriviadb')
    .then(response => console.log(response))
  }
  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}
export default App
