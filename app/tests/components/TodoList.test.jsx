const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');
const TodoList = require('TodoList');
const Todo = require('Todo');
describe('TodoList', () => {
  it('should exists', () => {
    expect(TodoList).toExist();
  });
  it('should render one Todo for each todo iteam', () => {
  	const todos = [
      {
        id: 1,
        text: 'Do something...',
      },
      {
        id: 2,
        text: 'Do something else...',
      },
    ];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={ todos }/>);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
  });
});