import { combineReducers } from 'redux';
import loggedReducer from './loggedReducer';
import clientReducer from './clientReducer';

const rootReducer = combineReducers({
  loggedReducer,
  clientReducer,
});

export default rootReducer;