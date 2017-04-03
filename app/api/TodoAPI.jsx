const $       = require('jquery');
const TodoAPI = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.todos = JSON.stringify(todos);
      return todos;
    }
  },
  getTodos: function () {
    const stringTodos = localStorage.todos;
    var todos         = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (err) {
      console.log(err);
    }
    return $.isArray(todos) ? todos : [];
  },
};
module.exports = TodoAPI;