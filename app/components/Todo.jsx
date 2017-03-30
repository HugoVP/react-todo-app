const React = require('react');
const Todo  = React.createClass({
  render: function () {
    const { id, text, completed } = this.props;
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={ completed }/>
        { text }
      </div>
    );
  },
});
module.exports = Todo;