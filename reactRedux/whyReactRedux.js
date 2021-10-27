import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
import { store } from './app/store.js';

//React has optimized UI rendering
//Redux has excellent state management
//React Redux is a library that combines these two and optimizes things like rendering, error management, and dispatching

//Benefits:
//Gives the entire app access to the Redux store without using props and props drilling.
//Subscribing individual components to specific pieces of the application state for optimized rendering.
//Easily dispatching actions within components.

//Review:
//Redux has a one-way data flow:
//state -> render (view) -> dispatch (action) -> state

const render = () => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}
store.subscribe(render);
render();