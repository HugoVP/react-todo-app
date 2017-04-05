const expect  = require('expect');
const actions = require('actions');
describe('Actions', () => {
  it('should generate setSearchText action', () => {
    const action = {
      type       : 'SET_SEARCH_TEXT',
      searchText : 'Some search text',
    };
    const res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
  it('should generate toggleShowCompleted action', () => {
    const action = {
      type : 'TOGGLE_SHOW_COMPLETED',
    };
    const res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  it('should generate addTodo action', () => {
    const action = {
      type : 'ADD_TODO',
      text : 'Thing To Do',
    };
    const res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });
  it('should generate toggleTodo action', () => {
    const action = {
      type : 'TOGGLE_TODO',
      id   : '123',
    };
    const res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});