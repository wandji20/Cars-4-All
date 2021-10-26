import { CARS_INDEX } from './carActions';

const initialState = {
  rentals: {},
  sales: {},
  car: {},
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARS_INDEX: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export default carReducer;
