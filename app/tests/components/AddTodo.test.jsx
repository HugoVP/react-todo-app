import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';
import { AddTodo } from 'AddTodo';
import { startAddTodo } from 'actions';
describe('AddTodo', () => {
  it('should exists', () => {
    expect(AddTodo).toExist();
  });
  it('should dispatch ADD_TODO when valid text todo', () => {
  	const spy      = expect.createSpy();
  	const addTodo  = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
  	const $el      = $(ReactDOM.findDOMNode(addTodo));
  	const form     = $el.find('form')[0];
  	const todoText = 'Check mail';
    const action   = startAddTodo(todoText);
    addTodo.todoText.value = todoText;
  	ReactTestUtils.Simulate.submit(form);
  	expect(spy).toHaveBeenCalledWith(action);
  });
  it('should not dispatch ADD_TODO when invalid text todo', () => {
  	const spy      = expect.createSpy();
  	const addTodo  = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
  	const $el      = $(ReactDOM.findDOMNode(addTodo));
  	const form     = $el.find('form')[0];
  	const todoText = '';
  	addTodo.todoText.value = todoText;
  	ReactTestUtils.Simulate.submit(form);
  	expect(spy).toNotHaveBeenCalled();
  });
});
