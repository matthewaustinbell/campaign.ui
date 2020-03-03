import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar'


class MyNavbar extends React.Component {
    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">Campaign</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <div>
              <div className="navbar-nav">
                {authed ? (<button className="btn btn-danger my-2 my-sm-0" onClick={this.logMeOut}>Logout</button>) : ('')}
                {authed ? (<button className="btn btn-danger my-2 my-sm-0">Leaderboards</button>) : ('')}
                {/* ///add profile next */}
                {authed ? (<button className="btn btn-danger my-2 my-sm-0" >Profile</button>) : ('')}
              </div>
              </div>  
          </div>
        </nav>
      </div>
      );
    }
}

export default MyNavbar;