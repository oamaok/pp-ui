import React from 'react';

export default class Root extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="brand">pp+</div>
        <div className="separator" />
        <div className="navigation">
          <a className="nav-btn active">
            global rankings
          </a>
          <a className="nav-btn">
            country rankings
          </a>
          <div className="nav-search">
            <label htmlFor="player-search">search a player</label>
            <input type="text" id="player-search" />
          </div>
          <div className="nav-search">
            <label htmlFor="beatmap-search">search a beatmap</label>
            <input type="text" id="beatmap-search" />
          </div>
          <a className="nav-btn">
            about
          </a>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}
