import { combineReducers } from 'redux';
import carReducer from './cars/cars';
import errorReducer from './errors/errors';
import userReducer from './user/user';
import reviewReducer from './reviews/reviews';

const rootReducer = combineReducers({
  cars: carReducer,
  user: userReducer,
  errors: errorReducer,
  reviews: reviewReducer,
});

export default rootReducer;
