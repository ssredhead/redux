const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
};

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state, 
        supplies: state.supplies + 15, 
        distance: state.distance, 
        days: state.days + 1
      };
    }
    case 'travel': {
      if (state.supplies < 20) {
          return {...state}
        } else {
          return {
            ...state,
            supplies: state.supplies - (action.payload * 20),
            distance: state.distance + (action.payload * 10),
            days: state.days + action.payload,
          };
      }
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1
      };
    }
    case 'sell': {
        return {
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash + 5,
        }
      }    
      case 'buy': {
        return {
          ...state,
          supplies: state.supplies + (action.payload * 25),
          cash: state.cash - (action.payload * 15),
        }
      }    
      case 'theft': {
        return {
          ...state,
          cash: state.cash /= (action.payload * 2),
        }
      }          
    default: {
      return state;
    }
  }
}

//Initialize state with default
let wagon = reducer(undefined,{}); 
console.log(wagon);

//day 1: travel
wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

//day 2: gather supplies
wagon = reducer(wagon, {type: 'gather'});
console.log(wagon);

//day 3: wagon tips
wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon);

//day 4: travel again
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);
