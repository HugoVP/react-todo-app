const React     = require('react');
const ReactDOM  = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect    = require('expect');
const $         = require('jquery');
import { startAddTodo } from 'actions';
import { AddTodo }      from 'AddTodo';
describe('AddTodo', () => {
  it('should exists', () => {
    expect(AddTodo).toExist();
  });
  it('should dispatch ADD_TODO when valid text todo', () => {
  	const spy      = expect.createSpy();
  	const addTodo  = TestUtils.renderIntoDocument(<AddTodo dispatch={ spy }/>);
  	const $el      = $(ReactDOM.findDOMNode(addTodo));
  	const form     = $el.find('form')[0];
  	const todoText = 'Check mail';
    const action   = startAddTodo(todoText);
    addTodo.refs.todoText.value = todoText;
  	TestUtils.Simulate.submit(form);
  	expect(spy).toHaveBeenCalledWith(action);
  });
  it('should not dispatch ADD_TODO when invalid text todo', () => {
  	const spy      = expect.createSpy();
  	const addTodo  = TestUtils.renderIntoDocument(<AddTodo dispatch={ spy }/>);
  	const $el      = $(ReactDOM.findDOMNode(addTodo));
  	const form     = $el.find('form')[0];
  	const todoText = '';
  	addTodo.refs.todoText.value = todoText;
  	TestUtils.Simulate.submit(form);
  	expect(spy).toNotHaveBeenCalled();
  });
});
