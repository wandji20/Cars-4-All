import BASE_URL from '../constants';
import { errorAction, notificationAction } from '../errors/errors';
import { getToken, setToken } from '../../helpers/token';

export const USER_CREATE = 'user/create';
export const LOG_OUT = 'user/logout';
// export const LOG_IN = 'user/log';
// export const SHOW_USER = 'user/show';

export const userCreateAction = (data) => ({
  type: USER_CREATE, payload: data,
});

export const logOutAction = () => ({
  type: LOG_OUT,
});

// export const userShowAction = (user) => ({
//   type: SHOW_USER, payload: user,
// });

export const postUser = (data) => async (dispatch) => {
  const user = {
    first_name: data.first,
    last_name: data.last,
    email: data.email,
    telephone: data.telephone,
    user_name: data.user,
    password: data.password,
    password_confirmation: data.confirmation,
  };

  dispatch(errorAction({}));
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

    if (response.Authorization) {
      setToken(response.Authorization, response.user_name);
      dispatch(userCreateAction({ loggedIn: true }));
    } else {
      dispatch(errorAction(response.errors));
    }
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};

export const postAuthentication = (authentication) => async (dispatch) => {
  dispatch(errorAction({}));
  try {
    const server = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authentication }),
    });

    const response = await server.json();

    if (response.Authorization) {
      setToken(response.Authorization, response.user_name);
      dispatch(userCreateAction({ loggedIn: true }));
    } else {
      dispatch(notificationAction(response.message));
    }
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};

export const showUser = () => async (dispatch) => {
  try {
    const token = getToken();
    const server = await fetch(`${BASE_URL}/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    });
    const response = await server.json();

    if (response.user) {
      dispatch(userCreateAction({ user: response.user }));
    } else {
      dispatch(notificationAction(response.message));
    }
  } catch (e) {
    dispatch(notificationAction(e.message));
  }
};
