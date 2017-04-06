const React      = require('react');
const uuid       = require('uuid');
const moment     = require('moment');
import TodoSearch from 'TodoSearch';
import TodoList   from 'TodoList';
import AddTodo    from 'AddTodo';
const TodoApp = React.createClass({
  render: () => (
    <div>
      <h1 className="page-title">
        Todo App
      </h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch/>
            <TodoList/>
            <AddTodo/>
          </div>
        </div>
      </div>
    </div>
  ),
});
module.exports = TodoApp;