import { combineReducers } from 'redux';
import carReducer from './cars/cars';

const rootReducer = combineReducers({ cars: carReducer });

export default rootReducer;
