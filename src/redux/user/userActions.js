import BASE_URL from '../constants';
import { errorAction } from '../errors/errors';

export const USER_CREATE = 'user/create';

const userCreateAction = (data) => ({
  type: USER_CREATE, payload: data,
});

export const postUser = (user) => async (dispatch) => {
  try {
    const server = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(user),
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
