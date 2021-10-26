const CARS_INDEX = 'cars/cars';

const carsIndex = (cars) => ({
  type: CARS_INDEX, payload: cars,
});

const getCarsIndex = () => async (dispatch) => {
  try {
    const server = await fetch('http://localhost:3001/cars');
    const response = await server.json();
    dispatch(carsIndex(response));
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

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
export { getCarsIndex, carsIndex };
