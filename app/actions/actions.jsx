import firebase, { firebaseRef, githubProvider } from 'app/firebase';
import moment from 'moment';
export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText,
  };
};
export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};
export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  };
};
export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo =  {
      text,
      completed   : false,
      createdAt   : moment().unix(),
      completedAt : null,
    };
    const uid     = getState().auth.uid;
    const todoRef = firebaseRef.child(`user/${ uid }/todos`).push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        id: todoRef.key,
        ...todo,
      }));
    }).catch(() => {
      console.log('fail');
    });
  };
};
export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos,
  }
};
export const startAddTodos = (todos) => {
  return (dispatch, getState) => {
    const uid      = getState().auth.uid;
    const todosRef = firebaseRef.child(`user/${ uid }/todos`);
    // const todosRef = firebaseRef.child('todos');
    return todosRef.once('value').then((snapshot) => {
      const todos     = snapshot.val() || {};
      var parsedTodos = [];
      Object.keys(todos).forEach((todoID) => {
        parsedTodos.push({
          id: todoID,
          ...todos[todoID],
        });
      });
      dispatch(addTodos(parsedTodos));
    });
  };
};
export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates,
  }
};
export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const uid     = getState().auth.uid;
    const todoRef = firebaseRef.child(`user/${ uid }/todos/${ id }`);
    const updates = {
      completedAt: completed ? moment().unix() : null,
      completed,
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    }).catch((err) => {
      console.log(err);
    });
  };
};
export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};
export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log(`Auth worked!, ${ result }`);
    }).catch((err) => {
      console.log(`err: ${ err }`);
    });
  };
};
export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out');
    }).catch((err) => {
      console.log(`err: ${ err }`);
    });
  };
};
