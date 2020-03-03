import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import firebase from 'firebase/app';
import Auth from '../Components/Auth/Auth';
import MyNavbar from '../Components/MyNavbar/MyNavbar';
import './App.scss'
import UserData from '../data/userData';
import QuestionData from '../data/questionData';
import fbConnection from '../helpers/data/connection';
import getMyQuestion from '../helpers/data/question';
import Leaderboards  from '../Components/Leaderboards/Leaderboards';
import Home from '../Components/Home/Home';


fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />)); 
      return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
    return <Route {...rest} render={props => routeChecker(props)} />;
  };

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
    console.log(this.state, 'HEllo from AppjsRender')
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
        {loadComponent()}
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
         <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/leaderboards" render={ () => <Leaderboards /> } />
          </div>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
