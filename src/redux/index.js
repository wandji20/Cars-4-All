import { combineReducers } from 'redux';
import carReducer from './cars/cars';
import errorReducer from './errors/errors';
import userReducer from './user/user';
import reviewReducer from './reviews/reviews';
import rentalReducer from './rentals/rentalActions';

const rootReducer = combineReducers({
  cars: carReducer,
  user: userReducer,
  errors: errorReducer,
  reviews: reviewReducer,
  rentals: rentalReducer,
});

export default rootReducer;
