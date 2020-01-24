import React, { Component } from 'react';
import './Home.scss';

import questionData from '../../data/questionData';

class Home extends Component {
    state = {
        questions : []
    }

    componentDidMount = () => {
        questionData.getAllQuestions()
        .then(resp => {
            const data = resp
            this. setState({questions:data})
        })
    }
    render () {
        const questions = this.state.questions
        const questionNames = question.map((question) => (
            <div className="singleQuestion">
            <img src={question.imageUrl} class="smallImg" alt={question.name}/>
            <h2 className="questionName">{question.name}</h2>
            {this.state.getAllQuestions}
            </div>
        ));
      return (
        <div className="Home">
        <button className="btn btn-warning listbutton">List Your Stuff</button>
        <div className="questionContainer">
        {questionNames}
        </div>
    </div>
      ); 
    }
}

export default Home;