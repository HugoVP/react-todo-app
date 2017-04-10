const React        = require('react');
const ReactDOM     = require('react-dom');
const { Provider } = require('react-redux');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const store = require('configureStore').configure();
import { startAddTodos } from 'actions';
import TodoAPI from 'TodoAPI';
import TodoApp from 'TodoApp';
import Login from 'Login';
store.dispatch(startAddTodos());
// $(document).foundation(); // Load Foundation
require('style!css!sass!appStyles'); // App css
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/">
        <Route path="todos" component={ TodoApp }/>
        <IndexRoute component={ Login }/>
      </Route>
    </Router>
  </Provider>,
	document.getElementById('app')
);