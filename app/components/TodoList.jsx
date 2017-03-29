const React    = require('react');
const Todo     = require('Todo');
const TodoList = React.createClass({
  render: function () {
    const { todos } = this.props;
    const renderTodos = () => {
      console.log(todos);
      return todos.map(( todo ) => {
        return (<Todo key={ todo.id } { ...todo }/>);
      });
    };
    return (
      <div>
        { renderTodos() }
      </div>
    );
  },
});
module.exports = TodoList;