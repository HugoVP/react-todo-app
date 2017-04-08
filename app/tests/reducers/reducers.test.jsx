const expect   = require('expect');
const df       = require('deep-freeze-strict');
const reducers = require('reducers');
describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type       : 'SET_SEARCH_TEXT',
        searchText : 'dog',
      };
      const res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });
  describe('toggleShowCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type       : 'TOGGLE_SHOW_COMPLETED',        
      };
      const res = reducers.toggleShowCompletedReducer(df(false), df(action));
      expect(res).toBe(true);
    });
  });
  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type : 'ADD_TODO',
        todo : {
          id          : '123',
          text        : 'Something',
          completed   : true,
          createdAt   : '123',
          completedAt : '321',
        },
      };
      const res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('should update todo', () => {
      const todos = [
        {
          id          : '123',
          text        : 'Something',
          completed   : true,
          createdAt   : '123',
          completedAt : '321',
        },
      ];
      const updates = {
        completed   : false,
        completedAt : null,
      };
      const action = {
        type : 'UPDATE_TODO',
        id   : '123',
        updates,
      };
      const res = reducers.todosReducer(df(todos), df(action));
      console.log(res);
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
    it('should add existing todos', () => {
      const todos = [
        {
          id          : 1,
          text        : 'Do something...',
          completed   : false,
          completedAt : null,
          createdAt   : 123,
        },
        {
          id          : 2,
          text        : 'Do something else',
          completed   : false,
          completedAt : null,
          createdAt   : 123,
        },
      ];
      const action = {
        type: 'ADD_TODOS',
        todos,
      };
      const res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(todos.length);
      expect(res[0]).toEqual(todos[0])
    });
  })
});