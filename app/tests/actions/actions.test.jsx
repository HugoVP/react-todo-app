import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';
import expect             from 'expect';
import * as actions       from 'actions';
const createMockStore = configureMockStore([thunk]);
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
        todo : {
          id          : '123',
          text        : 'Something',
          completed   : true,
          createdAt   : '123',
          completedAt : '321',
        },
      };
    const res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store    = createMockStore({});
    const todoText = 'My todo item';
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({ type: 'ADD_TODO' });
      expect(actions[0].todo).toInclude({ text: todoText });
      done();
    }).catch(done);
  });
  it('should generate addTodos action', () => {
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
    const res = actions.addTodos(todos);
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