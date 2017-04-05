const React      = require('react');
const uuid       = require('uuid');
const moment     = require('moment');
const TodoSearch = require('TodoSearch');
const TodoAPI    = require('TodoAPI');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
const TodoApp    = React.createClass({
  getInitialState: function () {
    return {
      todos         : TodoAPI.getTodos(),
      showCompleted : false,
      searchText    : '',
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted : showCompleted,
      searchText    : searchText.toLowerCase(),
    });
  },
  // handleToggle: function (todoID) {
  //   const updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === todoID) {
  //       todo.completed   = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : null;
  //     }
  //     return todo;
  //   });
  //   this.setState({ todos: updatedTodos });
  // },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id          : uuid(),
          text        : text,
          completed   : false,
          createdAt   : moment().unix(),
          completedAt : null,
        },
      ],
    });
  },
  render: function () {
    const { todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">
          Todo App
        </h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={ this.handleSearch }/>
              <TodoList/>
              <AddTodo onAddTodo={ this.handleAddTodo }/>
            </div>
          </div>
        </div>
      </div>
    );
  }, 
});
module.exports = TodoApp;