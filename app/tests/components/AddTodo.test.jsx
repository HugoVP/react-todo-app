const React     = require('react');
const ReactDOM  = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect    = require('expect');
const $         = require('jquery');
const AddTodo   = require('AddTodo');
describe('AddTodo', () => {
  it('should exists', () => {
    expect(AddTodo).toExist();
  });
  it('should call onAddTodo prop with valid data', () => {
  	const spy      = expect.createSpy();
  	const addTodo  = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy }/>);
  	const $el      = $(ReactDOM.findDOMNode(addTodo));
  	const form     = $el.find('form')[0];
  	const todoText = 'Check mail';
  	addTodo.refs.todoText.value = todoText;
  	TestUtils.Simulate.submit(form);
  	expect(spy).toHaveBeenCalledWith(todoText);
  });
  it('should not call onAddTodo prop when invalid input', () => {
  	const spy      = expect.createSpy();
  	const addTodo  = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy }/>);
  	const $el      = $(ReactDOM.findDOMNode(addTodo));
  	const form     = $el.find('form')[0];
  	const todoText = '';
  	addTodo.refs.todoText.value = todoText;
  	TestUtils.Simulate.submit(form);
  	expect(spy).toNotHaveBeenCalled();
  });
});
