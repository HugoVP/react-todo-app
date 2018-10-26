import React from 'react';
import { connect } from 'react-redux';
import TodoAPI from 'TodoAPI';
import Todo from 'Todo';
export class TodoList extends React.Component {
  render () {
    const { todos, showCompleted, searchText } = this.props;
    const filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    const renderTodos = () => {
      if (filterTodos.length === 0) {
        return (
          <p className="container__message">
            Nothing To Do
          </p>
        );
      }
      return filterTodos.map(todo => <Todo key={todo.id} {...todo}/>);
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}
export default connect(state => state) (TodoList);