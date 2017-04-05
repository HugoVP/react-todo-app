const React        = require('react');
const ReactDOM     = require('react-dom');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect    = require('expect');
const $         = require('jquery');
import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo} from 'Todo';
describe('TodoList', () => {
  it('should exists', () => {
    expect(TodoList).toExist();
  });
  it('should render one Todo for each todo iteam', () => {
  	const todos = [
      {
        id          : 1,
        text        : 'Do something...',
        completed   : false,
        completedAt : null,
        createdAt   : 123,
      },
      {
        id          : 2,
        text        : 'Do something else',
        completed   : false,
        completedAt : null,
        createdAt   : 123,
      },
    ];
    const store = configure({
      todos,
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={ store }>
        <ConnectedTodoList/>
      </Provider>
    );
    const todoList        = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(todos.length);
  });
  // it('should render empty message if no todos', () => {
  //   const todos    = [];
  //   const todoList = TestUtils.renderIntoDocument(<TodoList todos={ todos }/>);
  //   const $el      = $(ReactDOM.findDOMNode(todoList));
  //   expect($el.find('.container__message').length).toBe(1);
  // });
});