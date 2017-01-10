import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import {
  browserHistory,
} from 'react-router';
import {
  routerMiddleware,
  syncHistoryWithStore,
  routerReducer,
} from 'react-router-redux';


import {
  Routes,
} from 'containers';

const middleware = routerMiddleware(browserHistory);
const store = createStore(
  combineReducers({
    routing: routerReducer,
  }),
  applyMiddleware(middleware),
  applyMiddleware(ReduxThunk),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
, document.getElementById('root'));
