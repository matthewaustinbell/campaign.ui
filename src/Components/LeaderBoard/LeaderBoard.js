import React from 'react';
import Stats from '../Stats/Stats';
import Header from '../Header/Header';
import Player from '../Player/Player';
import UserData from '../../data/userData'

class LeaderBoard extends React.Component {
  state = {
    players : [{name: "COle", score:90},
    {name: "Matt", score:100}]
  }

  //vannilla javascript fix
  componentDidMount(){
    let players
    fetch('https://localhost:44322/api/users/')
    .then(res=>res.json())
    .then(res=>{
      this.setState({players: res})
    })
  }
  render() {
    return (
      <div className="player">
        {/* LEADER BOARD */}
        <div className="scoreboard">
                    <Header
                      title="Scoreboard"
                      totalPlayers={27}
                    />
                      {this.state.players.map( player =>(
                      <Player
                        name={player.name}
                        score={player.donationTotal}
                        />
                    ))}
          
          
        </div>
      </div>


    );
  }
}

export default LeaderBoard; 