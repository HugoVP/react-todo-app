import * as React   from 'react';
import { connect }  from 'react-redux';
import * as actions from 'actions';
export const AddTodo = React.createClass({
// export class AddTodo extends React.Component {
  // handleSubmit: function (event) {
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const todoText     = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  // render: function () {
  render() { 
    return (
      <div className="container__footer">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">
            Add Todo
          </button>
        </form>
			</div>
    );
	}
// }
});
// export AddTodo;
export default connect()(AddTodo);
