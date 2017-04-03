const $       = require('jquery');
const TodoAPI = {
  setTodos (todos) {
    if ($.isArray(todos)) {
      localStorage.todos = JSON.stringify(todos);
      return todos;
    }
  },
  getTodos () {
    const stringTodos = localStorage.todos;
    var todos         = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (err) {
      console.log(err);
    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos (todos, showCompleted, searchText) {
    var filteredTodos = todos;
    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => !todo.completed || showCompleted );
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });
    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      }
      return 0;
    });
    return filteredTodos;
  }
};
module.exports = TodoAPI;