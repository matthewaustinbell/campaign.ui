import React from 'react';
import PropTypes from 'prop-types';
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
            <div className="navbar-nav">
              {authed ? (<button className="btn btn-danger my-2 my-sm-0" onClick={this.logMeOut}>Logout</button>) : ('')}
              {authed ? (<button className="btn btn-danger my-2 my-sm-0" onClick={this.logMeOut}>Leaderboards</button>) : ('')}
              {authed ? (<button className="btn btn-danger my-2 my-sm-0" onClick={this.logMeOut}>Sign In</button>) : ('')}
            </div>
          </div>
        </nav>
      </div>
      );
    }
}

export default MyNavbar;


//    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//            {authed ? (<span className="nav-item nav-link">Profile</span>) : ('')}
//            <span className="nav-item nav-link">Leaderboards</span>
//            {authed ? (<span className="nav-item nav-link">Logout</span>) : ('')}
//            {!authed ? (<span className="nav-item nav-link">Sign In</span>) : ('')}
//           </div>
//          </div>
//         </div>
//        </div>
//       </div>
//     );
//   }
// }

// export default HomeNavbar;