import { CLIENT_ADD, CLIENT_REMOVE, CLIENT_SORT } from "../actions";

const INITIAL_STATE = [];

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENT_ADD:
      return [
        ...state,
        action.value,
      ];
    case CLIENT_REMOVE:
      return state.filter((each) => each !== action.value);
    default:
      return state;
  }
}

export default clientReducer;