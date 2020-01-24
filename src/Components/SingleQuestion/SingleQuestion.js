  
import React from 'react';

import questionData from '../../helpers/data/questions';

import './SingleQuestion.scss';

class SingleQuestion extends React.Component {
  state = {
    question: {},
  }

  componentDidMount() {
    const questionId = this.props.match.params.id;
    questionData.getSIngleQuestion(questionId)
      .then(questionPromise => this.setState({ question: questionPromise.data }))
      .catch(err => console.error('unable to get single question', err));
  }

  deleteQuestion = () => {
    const questionId = this.props.match.params.id;
    questionData.deleteQuestion(questionId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('could not get questions', err));
  }

  render() {
    const { question } = this.state;
    return (
      <div className="SingleQuestion">
        <h1>{question.sampleName}</h1>
        <h2>{question.location}</h2>
        <h3>{question.animal}</h3>
        <h5>{question.color}</h5>
        <h6>{question.weight}</h6>
        <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>

      </div>
    );
  }
}

export default SingleQuestion;