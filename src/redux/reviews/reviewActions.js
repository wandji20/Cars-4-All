import { getToken } from '../../helpers/token';
import { errorAction, notificationAction } from '../errors/errors';
import BASE_URL from '../constants';

export const REVIEWS_CAR = 'reviews/car';

export const reviewsCar = (reviews) => ({ type: REVIEWS_CAR, payload: reviews });

export const getReviewsIndex = () => async (dispatch, location, review) => {
  const token = getToken();
  dispatch(errorAction({}));
  const url = location === '/cars' ? `${BASE_URL}/car_reviews` : `${BASE_URL}/user_reviews`;
  try {
    const server = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review }),
    });

    const response = await server.json();
    console.log(response);
    // dispatch here
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};
