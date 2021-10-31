import { errorAction, notificationAction } from '../errors/errors';

const CARS_INDEX = 'cars/cars';

const carsIndex = (cars) => ({
  type: CARS_INDEX, payload: cars,
});

const getCarsIndex = () => async (dispatch) => {
  dispatch(errorAction({}));
  try {
    const server = await fetch('http://localhost:3001/cars');
    const response = await server.json();
    dispatch(carsIndex(response));
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};

export { getCarsIndex, CARS_INDEX };
