import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
  searchTextReducer,
  toggleShowCompletedReducer,
  todosReducer,
  authReducer
} from 'reducers';
export function configure (initialState = {}) {
  const reducer = combineReducers({
    searchText    : searchTextReducer,
    showCompleted : toggleShowCompletedReducer,
    todos         : todosReducer,
    auth          : authReducer
  });
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}