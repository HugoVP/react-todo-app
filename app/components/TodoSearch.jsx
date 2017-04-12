import React from 'react';
import { connect } from 'react-redux';
import {
  setSearchText,
  toggleShowCompleted
} from 'actions';
export class TodoSearch extends React.Component {
  render () {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input type = "search"
                 ref  = {(ref) => { this.searchText = ref; }}
                 placeholder = "Search todos"
                 value       = { searchText }
                 onChange    = { () => {
                   const searchText = this.searchText.value;
                   dispatch(setSearchText(searchText))
                 } }/>
        </div>
        <div>
          <label>
            <input type     = "checkbox"
                   ref      = {(ref) => { this.showCompleted = ref; }}
                   checked  = { showCompleted }
                   onChange = { () => dispatch(toggleShowCompleted()) }/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}
export default connect((state) => {
  return {
    showCompleted : state.showCompleted,
    searchText    : state.searchText,
  };
}) (TodoSearch);