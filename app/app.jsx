import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { startAddTodos } from 'actions';
import firebase from 'app/firebase';
import router from 'app/router'
const store = require('configureStore').configure();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('todos');
  } else {
    hashHistory.push('/')
  }
});
store.dispatch(startAddTodos());
// $(document).foundation(); // Load Foundation
require('style!css!sass!appStyles'); // App css
ReactDOM.render(
  <Provider store={ store }>
    { router }
  </Provider>,
	document.getElementById('app')
);