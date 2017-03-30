const React     = require('react');
const ReactDOM  = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect    = require('expect');
const $         = require('jquery');
const Todo      = require('Todo');
describe('Todo', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  });
  it('should call onToggle prop with id on click', () => {
    const todoData = {
      id        : 199,
      text      : 'Write todo test',
      completed : true,
    };
    const spy  = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo { ...todoData } onToggle={ spy }/>);
    const $el  = $(ReactDOM.findDOMNode(todo))[0];
    TestUtils.Simulate.click($el);
    expect(spy).toHaveBeenCalledWith(todoData.id);
  });
});
