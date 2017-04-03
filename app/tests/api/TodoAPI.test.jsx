const expect  = require('expect');
const TodoAPI = require('TodoAPI');
describe('TodoAPI', () => {
  beforeEach(() => {
    delete localStorage.todos;
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id        : 23,
        text      : 'test all files',
        completed : false,
      }];
      TodoAPI.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.todos);
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos array', () => {
      const badTodos = { a: 'a' };
      TodoAPI.setTodos(badTodos);
      expect(localStorage.todos).toBe(undefined);
    });
  });
  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      const actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todo if valid array in localStorage', () => {
      const todos = [{
        id        : 23,
        text      : 'test all files',
        completed : false,
      }];
      localStorage.todos = JSON.stringify(todos);
      const actualTodos  = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
});