import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  board: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOARD":
      return { ...state, board: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store