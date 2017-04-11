import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { login, logout, startAddTodos } from 'actions';
import firebase from 'app/firebase';
import router from 'app/router'
const store = require('configureStore').configure();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startAddTodos());
    hashHistory.push('todos');
  } else {
    store.dispatch(logout());
    hashHistory.push('/')
  }
});
// $(document).foundation(); // Load Foundation
require('style!css!sass!appStyles'); // App css
ReactDOM.render(
  <Provider store={ store }>
    { router }
  </Provider>,
	document.getElementById('app')
);