const React        = require('react');
const ReactDOM     = require('react-dom');
const { Provider } = require('react-redux');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const TodoApp = require('TodoApp');
const actions = require('actions');
const store   = require('configureStore').configure();
store.subscribe(() => {
  console.log('New state', store.getState());
});
// $(document).foundation(); // Load Foundation
require('style!css!sass!appStyles'); // App css
ReactDOM.render(
  <Provider store={ store }>
	 <TodoApp/>
  </Provider>,
	document.getElementById('app')
);