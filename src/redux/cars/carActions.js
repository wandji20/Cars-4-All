import { getToken } from '../../helpers/token';
import BASE_URL from '../constants';
import { errorAction, notificationAction } from '../errors/errors';
import { reviewsCar } from '../reviews/reviewActions';

const CARS_INDEX = 'cars/cars';
const CARS_CREATE = 'cars/create';
const CARS_SHOW = 'cars/show';
export const CARS_UPDATE = 'cars/update';

const carsIndex = (cars) => ({
  type: CARS_INDEX, payload: cars,
});

const carsCreate = (car) => ({
  type: CARS_CREATE, payload: car,
});

const carsShow = (car) => ({
  type: CARS_SHOW, payload: car,
});

export const carsUpdate = (car) => ({
  type: CARS_UPDATE, payload: car,
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

const postCarsCreate = (formData, navigate) => async (dispatch) => {
  dispatch(errorAction({}));
  const token = getToken();
  try {
    const server = await fetch('http://localhost:3001/cars', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    });
    const response = await server.json();
    if (response.car) {
      dispatch(carsCreate(response.car));
      navigate(-1);
    } else {
      dispatch(errorAction(response.errors));
    }
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};

const getCarShow = (id) => async (dispatch) => {
  const token = getToken();
  dispatch(errorAction({}));
  try {
    const server = await fetch(`${BASE_URL}/cars/${id}`, { headers: { Authorization: token } });
    const response = await server.json();
    dispatch(carsShow(response.car));
    dispatch(reviewsCar(response.reviews));
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};

export const putCarsUpdate = (id, formData, navigate) => async (dispatch) => {
  dispatch(errorAction({}));
  const token = getToken();
  try {
    const server = await fetch(`${BASE_URL}/cars/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: token,
      },
      body: formData,
    });
    const response = await server.json();
    if (response.car) {
      dispatch(carsUpdate(response.car));
      navigate(-1);
    } else {
      dispatch(errorAction(response.errors));
    }
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};

export {
  getCarsIndex, CARS_INDEX, postCarsCreate, CARS_CREATE, CARS_SHOW, getCarShow,
};
