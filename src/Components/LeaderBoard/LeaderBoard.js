import React from 'react';
import Stats from '../Stats/Stats';
import Header from '../Header/Header';

class LeaderBoard extends React.Component {
  render() {
    return (
      <div className="player">
        <Header />
        <Stats />
        <span className="player-name">
          Guil
        </span>

        <div className="counter">
          <button className="conter-action decrement"> - </button>
          <span className="counter-score"> 35 </span>
          <button className="counter-action increment"> + </button>
          
          
        </div>
      </div>


    );
  }
}

export default LeaderBoard; 