import React from 'react';

const Stats = (props) => {


    return (
        <table className="stats">
            <tbody>
              <tr>
                <td>Playerz:</td>
                {/* <td>{ totalPlayers }</td> */}
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>0</td>
              </tr>
            </tbody>
        </table>
    );
}

export default Stats;