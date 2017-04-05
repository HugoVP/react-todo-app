const React      = require('react');
const ReactDOM   = require('react-dom');
const TestUtils  = require('react-addons-test-utils');
const expect     = require('expect');
const $          = require('jquery');
import { TodoSearch } from 'TodoSearch';
describe('TodoSearch', () => {
  it('should exists', () => {
    expect(TodoSearch).toExist();
  });
  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const spy        = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={ spy }/>);
    const searchText = 'Dog';
    const action     = {
      type: 'SET_SEARCH_TEXT',
      searchText,
    };
    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const spy        = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={ spy }/>);
    const action     = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});