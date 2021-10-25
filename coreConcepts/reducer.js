// How are actions carried out on the state? Reducers

//A reducer function is a JS function that defines how the current state and an action
//are used in combination to create a new state. It uses the spread operator to get the current state
//It defines the application's next state given a current state and a specific action.
//It returns a default initial state if no action is provided.
//It returns the current state if the action is not recognized.

//Rules of reducers:
//1)They should only calculate the new state value based on the state and action arguments.
//2)They are not allowed to modify the existing state. 
// Instead, they must copy the existing state and make changes to the copied values.
//3)They must not do any asynchronous logic or have other “side effects”.

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'songs/addSong': {
      return [...state, action.payload];
    }
    case 'songs/removeSong': {
      return state.filter(songs => songs != action.payload);
    }
    default: {
      return state;
    }
  }
}


const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};

const removeAll = {
  type: 'songs/removeAll'
}