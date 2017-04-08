import expect  from 'expect';
import TodoAPI from 'TodoAPI';
describe('TodoAPI', () => {
  beforeEach(() => {
    delete localStorage.todos;
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [
        {
          id        : 23,
          text      : 'test all files',
          completed : false,
        }
      ];
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
      const todos = [
        {
          id        : 23,
          text      : 'test all files',
          completed : false,
        }
      ];
      localStorage.todos = JSON.stringify(todos);
      const actualTodos  = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
  describe('filterTodos', () => {
    const todos = [
      {
        id        : 1,
        text      : 'do something',
        completed : true,
      },
      {
        id        : 2,
        text      : 'do something, again',
        completed : true,
      },
      {
        id        : 3,
        text      : 'do something else',
        completed : false,
      },
    ];
    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });
    it('should return non-completed todos when showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });
    it('should filter todos by searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'again');
      expect(filteredTodos.length).toBe(1);
    });
    it('should return all todos if searchText is empty', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });
  });
});