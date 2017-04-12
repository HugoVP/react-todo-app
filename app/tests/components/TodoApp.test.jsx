import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';
import { configure } from 'configureStore';
import { TodoApp } from 'TodoApp';
import TodoList from 'TodoList';
 describe('TodoApp', () => {
  it('should exists', () => {
    expect(TodoApp).toExist();
  });
  it('should render todoList', () => {
    const store    = configure();
    const provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    const todoApp  = ReactTestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = ReactTestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
    expect(todoList.length).toBe(1);
  })
});