const React      = require('react');
const ReactDOM   = require('react-dom');
const TestUtils  = require('react-addons-test-utils');
const expect     = require('expect');
const $          = require('jquery');
const TodoSearch = require('TodoSearch');
describe('TodoSearch', () => {
  it('should exists', () => {
    expect(TodoSearch).toExist();
  });
  it('should call onSearch with entered input text', () => {
    const spy        = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={ spy }/>);
    const searchText = 'Dog';
    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });
  it('should call onSearch with proper checked value', () => {
    const spy        = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={ spy }/>);
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '');
  });
});