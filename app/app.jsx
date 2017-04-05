const React    = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');
const actions = require('actions');
const store   = require('configureStore').configure();
store.subscribe(() => {
  console.log('New state', store.getState());
});
store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
// $(document).foundation(); // Load Foundation
require('style!css!sass!appStyles'); // App css
ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);