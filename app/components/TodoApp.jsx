const React      = require('react');
const uuid       = require('uuid');
const TodoList   = require('TodoList');
const TodoSearch = require('TodoSearch');
const AddTodo    = require('AddTodo');
const TodoAPI    = require('TodoAPI');
const TodoApp    = React.createClass({
  getInitialState: function () {
    return {
      showCompleted : false,
      searchText    : '',
      todos         : TodoAPI.getTodos(),
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
  handleToggle: function (todoID) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoID) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id        : uuid(),
          text      : text,
          completed : false,
        },
      ],
    });
  },
  render: function () {
    const { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch }/>
        <TodoList todos={ todos } onToggle={ this.handleToggle }/>
        <AddTodo onAddTodo={ this.handleAddTodo }/>
      </div>
    );
  }, 
});
module.exports = TodoApp;