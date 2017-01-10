import React from 'react';

import data from '../../data/globaltop100.json';
/*
    "userID": 124493,
    "userName": "Cookiezi",
    "country": "AA",
    "total": 13260.633320285182,
    "aim": 7038.234180769934,
    "jumpAim": 6549.026916609283,
    "flowAim": 5020.6287999709712,
    "precision": 3191.8864214341947,
    "speed": 4809.0374991476765,
    "stamina": 4675.6353674097309,
    "accuracy": 3722.6731673306435
*/

export default class Root extends React.Component {
  render() {
    return ( 
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th className="number">Total</th>
              <th className="number">Aim</th>
              <th className="number">Speed</th>
              <th className="number">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>{row.userName}</td>
                <td className="number">{row.total.toFixed(0)}pp</td>
                <td className="number">{row.aim.toFixed(0)}</td>
                <td className="number">{row.speed.toFixed(0)}</td>
                <td className="number">{row.accuracy.toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
