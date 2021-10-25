//Reducers must be pure functions that make immutable updates.

//They are pure because they will always have the same outputs given the same inputs.

//They make immutable updates by copying existing data and changing that, not mutating current data.

const removeItemAtIndex = (list, index) => {
 return [
   ...list.slice(0,index),
   ...list.slice(index+1, list.length)
 ]
};

console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));