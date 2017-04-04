const React     = require('react');
const ReactDOM  = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect    = require('expect');
const $         = require('jquery');
const TodoApp   = require('TodoApp');
describe('TodoApp', () => {
  it('should exists', () => {
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo', () => {
  	const todoText = 'test text';
  	const todoApp  = TestUtils.renderIntoDocument(<TodoApp/>);
  	todoApp.setState({ todos: [] });
  	todoApp.handleAddTodo(todoText);
  	expect(todoApp.state.todos[0].text).toBe(todoText);
  });
  it('should toggled completed value when handleToggle called', () => {
    const todos = [
      {
        id          : 12,
        text        : 'Todo test',
        completed   : false,
        createdAt   : 0,
        completedAt : null,
      },
    ];
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({ todos: todos });
    const todo = todoApp.state.todos[0];
    expect(todo.completed).toBe(false);
    todoApp.handleToggle(todo.id);
    expect(todo.completed).toBe(true);
    expect(todo.completedAt).toBeA('number');
  });
  it('should toggle todo from completed to incompleted', () => {
    const todos     = [
      {
        id          : 12,
        text        : 'Todo test',
        completed   : true,
        createdAt   : 0,
        completedAt : 0,
      },
    ];
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({ todos: todos });
    const todo = todoApp.state.todos[0];
    expect(todo.completed).toBe(true);
    todoApp.handleToggle(todo.id);
    expect(todo.completed).toBe(false);
    expect(todo.completedAt).toNotExist();
  });
});