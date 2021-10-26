import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//Connecting Redux and React:
//A render() function will be subscribed to the store to re-render the top-level React Component.
//The top-level React component will receive the current value of store.getState() as a prop and use that data to render the UI.
//Event listeners attached to React components will dispatch actions to the store.

// REDUX CODE
///////////////////////////////////

const increment = () => {
  return {type: 'increment'} 
}

const decrement = () => { 
  return {type: 'decrement'}
}

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state; 
  }
} 

const store = createStore(counterReducer);

// REACT CODE
///////////////////////////////////

const render = () => {
  ReactDOM.render(
    <CounterApp 
      state={store.getState()}
    />,
    document.getElementById('root')
  )
}


// Render once with the initial state.
render();
// Subscribe render to changes to the store's state.
store.subscribe(render);

function CounterApp(props) {
  const state = props.state;
  
  const onIncrementButtonClicked = () => {
    // Dispatch an 'increment' action.
    store.dispatch(increment());
  }
 
  const onDecrementButtonClicked = () => {
    // Dispatch an 'decrement' action.
    store.dispatch(decrement());
  }
  
  return (   
    <div id='counter-app'>
      <h1> {state} </h1>
      <button onClick={onIncrementButtonClicked}>+</button> 
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  )
}
