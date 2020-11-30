import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  board: [],
  status: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOARD":
      return { ...state, board: action.payload }
    case "SET_STATUS":
      return { ...state, status: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store