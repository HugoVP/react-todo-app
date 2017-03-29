const React    = require('react');
const TodoList = require('TodoList');
const AddTodo  = require('AddTodo');
const TodoApp  = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id   : 1,
          text : 'Walk the dog',
        },
        {
          id   : 2,
          text : 'Clean the yard',
        },
        {
          id   : 3,
          text : 'Leave mail on porch',
        },
        {
          id   : 4,
          text : 'Play video games',
        },
      ],
    };
  },
  handleAddTodo: function (text) {
    console.log('New Todo: ', text);
  },
  render: function () {
    const { todos } = this.state;
    return (
      <div>
        <TodoList todos={ todos }/>
        <AddTodo onAddTodo={ this.handleAddTodo }/>
      </div>
    );
  }, 
});
module.exports = TodoApp;