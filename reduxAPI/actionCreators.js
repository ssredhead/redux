import { createStore } from 'redux';

// Action creators reduce repetition and provide consistency in store calls. It is a function that returns an action object with a type property. Typically called and passed directly into store.dispatch().

const increment = () => {
  return { type: "increment" };
};
const decrement = () => {
  return { type: "decrement" };
};

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

// Modify the dispatches below.
store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());
