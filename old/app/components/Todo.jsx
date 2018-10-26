import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startToggleTodo } from 'actions';
export class Todo extends React.Component {
  render () {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      var message, timestamp;
      if (completed) {
        message   = 'Completed';
        timestamp = completedAt;
      } else {
        message   = 'Created';
        timestamp = createdAt;
      }
      return `${ message } ${ moment.unix(timestamp).format('MMM Do YYYY @ h:mm a') }`;
    };
    return (
      <div className = { todoClassName }
           onClick   = { () => dispatch(startToggleTodo(id, !completed)) }>
        <div>
          <input type="checkbox" defaultChecked={ completed }/>  
        </div>
        <div>
          <p>{ text }</p>
          <p className="todo__subtext">
            { renderDate() }
          </p>  
        </div>
      </div>
    );
  }
}
export default connect()(Todo);