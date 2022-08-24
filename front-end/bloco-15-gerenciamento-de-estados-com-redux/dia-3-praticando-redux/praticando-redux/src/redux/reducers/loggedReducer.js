import { LOGGED } from "../actions";

const INITIAL_STATE = false;

const loggedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGGED:
      return action.value;
    default:
      return state;
  }
}

export default loggedReducer;