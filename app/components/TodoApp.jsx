const React      = require('react');
const TodoList   = require('TodoList');
const TodoSearch = require('TodoSearch');
const AddTodo    = require('AddTodo');
const uuid       = require('uuid');
const TodoApp    = React.createClass({
  getInitialState: function () {
    return {
      showCompleted : false,
      searchText    : '',
      todos         : [
        {
          id   : uuid(),
          text : 'Walk the dog',
        },
        {
          id   : uuid(),
          text : 'Clean the yard',
        },
        {
          id   : uuid(),
          text : 'Leave mail on porch',
        },
        {
          id   : uuid(),
          text : 'Play video games',
        },
      ],
    };
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted : showCompleted,
      searchText    : searchText.toLowerCase(),
    });
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id   : uuid(),
          text : text,
        },
      ],
    });
  },
  render: function () {
    const { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch }/>
        <TodoList todos={ todos }/>
        <AddTodo onAddTodo={ this.handleAddTodo }/>
      </div>
    );
  }, 
});
module.exports = TodoApp;