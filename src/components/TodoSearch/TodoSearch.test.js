import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';
import { TodoSearch } from 'TodoSearch';
describe('TodoSearch', () => {
  it('should exists', () => {
    expect(TodoSearch).toExist();
  });
  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const spy        = expect.createSpy();
    const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    const searchText = 'Dog';
    const action     = {
      type: 'SET_SEARCH_TEXT',
      searchText,
    };
    todoSearch.searchText.value = searchText;
    ReactTestUtils.Simulate.change(todoSearch.searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const spy        = expect.createSpy();
    const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    const action     = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    todoSearch.showCompleted.checked = true;
    ReactTestUtils.Simulate.change(todoSearch.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});