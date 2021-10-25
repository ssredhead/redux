import { createStore } from 'redux';
// The store is an object that enforces the one-way data flow model
// that Redux is built upon. It holds the current state inside,
// receives action dispatches, executes the reducer to get the next state,
// and provides access to the current state for the UI to re-render.

//Redux exports a valuable helper function for creating the store called createStore()

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
}

// Create the store here
const store = createStore(countReducer);