  
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

 

  render() {
    const { question } = this.state;
    return (
       <div className="SingleQuestion">
      </div>
    );
  }
}

export default SingleQuestion;