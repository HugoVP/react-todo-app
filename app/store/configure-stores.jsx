const redux = require('redux');
const { searchTextReducer, toggleShowCompletedReducer, todosReducer } = require('reducers');
export const configure = () => {
  const reducer = redux.combineReducers({
    searchText    : searchTextReducer,
    showCompleted : toggleShowCompletedReducer,
    todos         : todosReducer,
  });
  const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}