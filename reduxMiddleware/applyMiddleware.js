import { createStore, applyMiddleware } from 'redux';

/*middleware runs after an action is dispatched and before the action is passed along to the reducer.

middlewares must conform to a specific, nested function structure in order to work as part of the pipeline (a higher-order function)

Each middleware has access to the storeAPI, consisting of the dispatch and getState functions. 

The body of the middleware function performs the middleware's specific task before calling the next middleware in the pipeline with the current action.*/

const messageReducer = (state = '', action) => {
  if (action.type === 'NEW_MESSAGE') {
    return action.payload;
  } else {
    return state;
  }
}

// logger middleware function:
const logger = storeAPI => next => action => {
  console.log(storeAPI.getState());
  const nextState = next(action);
  console.log(nextState);
  return nextState;
};

const store = createStore(messageReducer, '', applyMiddleware(logger));

store.dispatch({
  type: 'NEW_MESSAGE',
  payload: 'I WROTE A MIDDLEWARE'
});
