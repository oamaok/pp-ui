import React from 'react';

import {
  Sidebar,
} from 'containers';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
