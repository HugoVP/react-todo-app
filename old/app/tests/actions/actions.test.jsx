import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';
import expect             from 'expect';
import firebase, { firebaseRef } from 'app/firebase';
import * as actions              from 'actions';
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
  it('should generate updateTodo action', () => {
    const action = {
      type    : 'UPDATE_TODO',
      id      : '123',
      updates : { completed: false },
    };
    const res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });
  it('should generate login action object', () => {
    const action = {
      type : 'LOGIN',
      uid  : '123abc'
    };
    const res = actions.login(action.uid);
    expect(res).toEqual(action);
  });
  it('should generate logout action object', () => {
    const action = {
      type : 'LOGOUT'
    };
    const res = actions.logout();
    expect(res).toEqual(action);
  });
  describe('Test with Firebase todos', () => {
    var testTodoRef, todosRef, uid;
    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid      = user.uid;
        todosRef = firebaseRef.child(`users/${ uid }/todos`);
        return todosRef.remove();
      }).then(() => {
        testTodoRef = todosRef.push();
        return testTodoRef.set({
          text      : 'Some ToDo',
          completed : false,
          createdAt : 123,
        });
      })
     .then(done)
     .catch(done);
    });
    afterEach((done) => {
      todosRef.remove().then(done)
    });
    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store  = createMockStore({ auth: { uid } });
      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions.length).toBeGreaterThanOrEqualTo(1);
        const mockAction = mockActions[0];
        expect(mockAction).toInclude({
          type : 'UPDATE_TODO',
          id   : testTodoRef.key,
        });
        expect(mockAction.updates).toInclude({ completed: true });
        expect(mockAction.updates.completedAt).toExist();
        done();
      }).catch(done);
    });
    it('should populate todos and dispatch ADD_TODOS', (done) => {
      const store  = createMockStore({ auth: { uid }});
      const action = actions.startAddTodos();
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Some ToDo');
        done();
      }).catch(done);
    });
    it('should create todo and dispatch ADD_TODO', (done) => {
    const store  = createMockStore({ auth: { uid } });
    const todoText = 'My todo item';
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBeGreaterThanOrEqualTo(1);
      expect(actions[0]).toInclude({ type: 'ADD_TODO' });
      expect(actions[0].todo).toInclude({ text: todoText });
      done();
    }).catch(done);
  });
  });
});