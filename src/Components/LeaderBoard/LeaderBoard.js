import React from 'react';

class LeaderBoard extends React.Component {
  render() {
    return (
      <div className="player">
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