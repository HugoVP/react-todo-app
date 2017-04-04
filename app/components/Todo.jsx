const React  = require('react');
const moment = require('moment');
const Todo   = React.createClass({
  render: function () {
    const { id, text, completed, createdAt, completedAt } = this.props;
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
      <div onClick={ () => this.props.onToggle(id) }>
        <input type="checkbox" defaultChecked={ completed }/>
        <p>{ text }</p>
        <p>{ renderDate() }</p>
      </div>
    );
  },
});
module.exports = Todo;