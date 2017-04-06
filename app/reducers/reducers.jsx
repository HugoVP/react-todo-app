import moment from 'moment';
export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};
export const toggleShowCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};
export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo,
      ];
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos,
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          const toggledCompleted = !todo.completed;
          return {
            ...todo,
            completed   : toggledCompleted,
            completedAt : toggledCompleted ? moment().unix() : null,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};