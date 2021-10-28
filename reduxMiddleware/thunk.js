const remindMeTo = task => {
  return `Remember to ${task}!!!`;
}

const remindMeLater = task => {
  return () => {
    return remindMeTo(task)
  }
}

//Thunks is included in @reduxjs/toolkit
//It a flexible and popular way to add asynchronous functionality to Redux.
//A thunk is a high-order function that wraps the computations to perform later.
//Thunks allow you to bundle up bits of computation you want to delay into packages that can be passed around in code.

//immediate call
console.log(remindMeTo('call mom'));
const reminder = remindMeLater('water the plants');

console.log(reminder());