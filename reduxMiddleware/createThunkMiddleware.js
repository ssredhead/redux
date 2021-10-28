//redux-thunk middleware works by performing a simple check to the argument passed to dispatch.
//If dispatch receives a function, the middleware invokes it. If it receives a plain object, then it passes the action along to reducers to trigger state updates.

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;