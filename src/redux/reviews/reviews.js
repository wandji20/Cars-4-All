import { REVIEWS_CAR } from './reviewActions';

const initialState = {
  user: [],
  car: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.payload) {
    case REVIEWS_CAR: {
      return {
        user: [], car: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default reviewReducer;
