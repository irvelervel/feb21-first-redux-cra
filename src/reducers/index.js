// a reducer is a PURE FUNCTION that is going to compute the new iteration of our application state,
// held by the Redux Store

// every reducer is a PURE FUNCTION
// a pure function does not mutate its arguments
// a pure function with the same input will always emit the same output

import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // I now need to generate a new state from
        // an action of type INCREMENT
        ...state,
        // the spread operator is going to carry over every key/value pair from the old state
        // the spread operator makes sure I don't alter the initial state
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}
