import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';
import { Todo } from 'Todo';
import { startToggleTodo } from 'actions';
describe('Todo', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  });
  it('should dispatch UPDATE_TODO action on click', () => {
    const todo = {
      id          : 199,
      text        : 'Write todo test',
      completed   : true,
      createdAt   : 0,
      completedAt : null,
    };
    const action = startToggleTodo(todo.id, !todo.completed);
    const spy    = expect.createSpy();
    const cTodo  = ReactTestUtils.renderIntoDocument(<Todo {...todo} dispatch={spy} />);
    const $el    = $(ReactDOM.findDOMNode(cTodo));
    ReactTestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
