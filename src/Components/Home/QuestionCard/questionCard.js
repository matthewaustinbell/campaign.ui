import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import questionShape from '../../helpers/propz/questionShape';


class QuestionCard extends React.Component {
  static propTypes = {
    question: questionShape.questionCardShape,
    deleteQuestion: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { question, deleteQuestion } = this.props;
    deleteQuestion(question.id);
  }

  render() {
    const { question } = this.props;
    const singleLink = `/question/${question.id}`;
    return (
      <div className="QuestionCard col-4">
        <div className="card">
          <div className="card-body">
          <h5 className="card-title">{question.sampleName}</h5>
          <Link className="btn btn-success" to={singleLink}>View</Link>
          <p className="card-text">{question.location}</p>
          <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;