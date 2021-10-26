/* Note to learners: 
Normally, you would import redux like this:

  import { createStore } from 'redux';

Due to Codecademy's technical limitations 
for testing this exercise, we are using 
`require()`.
*/

//Connect Redux store to UI steps: 
//1) Create Redux Store
//2) Render application's initial state
//3) Subscribe to updates: Inside the subscription callback: 
//get the current store state
//select the data needed by this piece of UI
//Update the UI with the data
//4) Respond to UI events by dispatching Redux actions
const { createStore } = require('redux');

// Action Creators
function increment() { 
  return {type: 'increment'}
}

function decrement() { 
  return {type: 'decrement'}
}

// Reducer / Store
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
};  
const store = createStore(countReducer);

// HTML Elements
const counterElement = document.getElementById('counter');
const incrementer = document.getElementById('incrementer');
const decrementer = document.getElementById('decrementer');

// Store State Change Listener
const render = () => {
  //render initial counter state
  counterElement.innerHTML = store.getState();
};
//call render -> UI
render();
//subscribe render so that it updates with state changes/action dispatches
store.subscribe(render);


// DOM Event Handlers
const incrementerClicked = () => {
  store.dispatch(increment());
}
incrementer.addEventListener('click', incrementerClicked);
 
const decrementerClicked = () => {
  store.dispatch(decrement());
}
decrementer.addEventListener('click', decrementerClicked);




