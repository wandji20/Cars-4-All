import { getToken } from '../../helpers/token';
import { errorAction, notificationAction } from '../errors/errors';

const CARS_INDEX = 'cars/cars';
const CARS_CREATE = 'cars/create';

const carsIndex = (cars) => ({
  type: CARS_INDEX, payload: cars,
});

const carsCreate = (car) => ({
  type: CARS_CREATE, payload: car,
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

const postCarsCreate = (car, history) => async (dispatch) => {
  dispatch(errorAction({}));
  const token = getToken();
  try {
    const server = await fetch('http://localhost:3001/cars', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ car }),
    });
    const response = await server.json();
    if (response.car) {
      dispatch(carsCreate(response.car));
      history.goBack();
    } else {
      dispatch(errorAction(response.errors));
    }
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};

export {
  getCarsIndex, CARS_INDEX, postCarsCreate, CARS_CREATE,
};
