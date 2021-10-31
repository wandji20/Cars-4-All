import { CARS_INDEX, CARS_CREATE } from './carActions';

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

    case CARS_CREATE: {
      const car = action.payload;
      if (car.group === 'rent') {
        return { ...state, rentals: { ...state.rentals, [car.id]: car } };
      }
      if (car.group === 'sale') {
        return { ...state, sales: { ...state.sales, [car.id]: car } };
      }
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default carReducer;
