/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { render } from 'enzyme';
import { createBrowserHistory } from 'history';
import reducer from '../reducers';
import initialState from '../initialState';

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk)),
);
const history = createBrowserHistory();

const MockProvider = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);
export default MockProvider;
