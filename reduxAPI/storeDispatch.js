import { createStore } from 'redux';

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
//the store.dispatch() method can be used to 'dispatch' or update the state. It takes an action object with a state change 'type'

//calling the store.dispatch() makes the reducer execute with the same action object. The state will be updated and returned.
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
console.log(store.getState());
store.dispatch({type:'decrement'});
store.dispatch({type:'decrement'});
store.dispatch({type:'decrement'});
console.log(store.getState());
