import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

// old action creator
// export const editBudget = (budget) => {
//   return {
//     type: 'budgets/editBudget',
//     payload: budget
//   }
// }

// old reducer
// const budgetsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'budgets/editBudget':
//       const newBudgets = state.map(budget => {
//         if (budget.category === action.payload.category) {
//           return action.payload;
//         }
//         return budget;
//       })
//       return newBudgets;
//     default:
//       return state;
//   }
// }

const budgetsSlice = createSlice({
  name: 'budgets', //prefix for reducer
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      /*find the budget object in state whose category matches the 'category' property on 'action.payload' and update the amount of the budget object to match the 'amount' on 'action.payload'. Remember, 'createSlice()' uses 'Immer' internally, so you are free to write mutating logic that updates the slice's state.
      */
      const category = action.payload.category;
      const amount = action.payload.amount;
      state.find(budget => budget.category === category).amount = amount;
    }   
  }
});

export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;
export const { editBudget } = budgetsSlice.actions;
