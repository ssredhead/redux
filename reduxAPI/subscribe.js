import { createStore } from 'redux';

//Just like event listeners, redux has store.subscribe()
//This method listens for and responds to actions dispatched. It takes one argument: a listener function, that executes in response to store state changes.

//Sometimes it is useful not to respond to actions in the store, so .subscribe() also has an unsubscribe() method.

const increment = () => {
  return { type: 'increment' }
}

const decrement = () => {
  return { type: 'decrement' }
}


const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

// Define your change listener function here.
const printCountStatus = () => {
  console.log(`This count is ${store.getState()}`)
};
store.subscribe(printCountStatus);

store.dispatch(decrement()); // store.getState() === -1
store.dispatch(increment()); // store.getState() === 0
store.dispatch(increment()); // store.getState() === 1
