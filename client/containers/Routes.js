import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';

import {
  Root,
  Global,
} from 'containers';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Root}>
          <IndexRoute component={Global} />
        </Route>
      </Router>
    );
  }
}
