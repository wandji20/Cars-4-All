import { combineReducers } from 'redux';
import carReducer from './cars/cars';
import errorReducer from './errors/errors';
import userReducer from './user/user';

const rootReducer = combineReducers({
  cars: carReducer,
  user: userReducer,
  error: errorReducer,
});

export default rootReducer;
