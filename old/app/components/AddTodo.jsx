import React from 'react';
import { connect } from 'react-redux';
import { startAddTodo } from 'actions';
export class AddTodo extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const todoText = this.todoText.value;
    if (todoText.length > 0) {
      this.todoText.value = '';
      dispatch(startAddTodo(todoText));
    } else {
      this.todoText.focus();
    }
  }
  render() { 
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input
            type        = "text"
            ref         = {(ref) => { this.todoText = ref; }}
            placeholder = "What do you need to do?"
          />
          <button className="button expanded">
            Add Todo
          </button>
        </form>
			</div>
    );
	}
}
export default connect()(AddTodo);
