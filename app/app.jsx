const React        = require('react');
const ReactDOM     = require('react-dom');
const { Provider } = require('react-redux');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const store = require('configureStore').configure();
import { addTodos } from 'actions';
import TodoAPI      from 'TodoAPI';
import TodoApp      from 'TodoApp';
store.subscribe(() => {
  const state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});
const initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));
// $(document).foundation(); // Load Foundation
require('style!css!sass!appStyles'); // App css
ReactDOM.render(
  <Provider store={ store }>
	 <TodoApp/>
  </Provider>,
	document.getElementById('app')
);