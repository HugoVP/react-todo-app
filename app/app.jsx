const React    = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');

// Load Foundation
// $(document).foundation();

// App css
require('style!css!sass!AppStyles');

ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);