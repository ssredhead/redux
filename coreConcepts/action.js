//State -> Action -> View

//Most applications have separate components that need to communicate and share data
//Ex. An input field to add to a todo list, which then transfers the data from the 
//input field, add it to the todo array, and then render it. This process is an action.
//In Redux, actions are represented as plain JS objects.

//Every action must have a type property with a string value describing the action.
//Typically, it also has a payload property with the object value (any info related to the action).
//When an action is generated and notifies other parts of the application, the action is 'dispatched'
const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong', //type (kind of like API call)
  payload: 'Halo' //title of song to add
};

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};

const removeAll = {
  type: 'songs/removeAll'
};