import React from 'react';
import Counter from '../Counter/Counter';

const Player = (props) => {
    console.log(props)
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score={props.score} />
        </div>
    );
}

export default Player; 