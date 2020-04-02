import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';



class MyNavbar extends React.Component {
    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }
    render() {
      const { authed } = this.props;
      return (
          <div class="Navbar">
            <div>
              <img className="logo" height="30px" width="30px" src="https://cdn3.iconfinder.com/data/icons/recreation-hobbies-vol-2/128/Camping_Tent-512.png"></img>
            </div>
            <div class="Navbar__Link Navbar__Link-toggle">
               <i class="fas fa-bars"></i>
            </div>
            <nav class="Navbar__Items">
           
            </nav>
            <nav class="Navbar__Items Navbar__Items--right">
              <div class="Navbar__Link">
                Link
              </div>
            </nav>
          <nav>
          <span className="navbar-brand">Campaign</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <div>
                {authed ? (<button className="logOutButton" onClick={this.logMeOut}>
                  Logout</button>) : ('')}
                {authed ? (<button>
                  Leaderboards</button>) : ('')}
                {/* ///add profile next */}
                {authed ? (<button>
                  Profile</button>) : ('')}
              </div>
              </div>  
          </div>
        </nav>
      </div>
      );
    }
}

export default MyNavbar;