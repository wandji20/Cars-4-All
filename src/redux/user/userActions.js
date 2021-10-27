/* eslint-disable */
import BASE_URL from '../constants';
import { errorAction } from '../errors/errors';

export const USER_CREATE = 'user/create';

const userCreateAction = (data) => ({
  type: USER_CREATE, payload: data,
});

export const postUser = (data) => async (dispatch) => {
  const user = {
    first_name: data.first,
    last_name: data.last,
    email: data.email,
    telephone: data.telephone,
    user_name: data.user,
    password: data.password,
    password_confirmation: data.password_confirmation,
  };

  try {
    const server = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });
    const response = await server.json();
    console.log(response);
    if (response.Authorization) {
      localStorage.setItem('token', response);
      dispatch(userCreateAction(response.user_name));
    } else {
      dispatch(errorAction(response.error));
    }
  } catch (e) {
    console.log(e);
  }
};
