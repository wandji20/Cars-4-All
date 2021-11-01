import { CAR_RENTALS } from './rentals';

const initialState = {
  user: [],
  car: [],
};

const rentalReducer = (state = initialState, action) => {
  switch (action.payload) {
    case CAR_RENTALS: {
      return {
        ...state, car: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default rentalReducer;
