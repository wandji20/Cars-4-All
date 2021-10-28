import { USER_CREATE, LOG_OUT } from './userActions';

const initialState = {
  loggedIn: false,
  userName: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATE:
      return {
        ...state, ...action.payload,
      };

    case LOG_OUT:
      return {
        ...state, loggedIn: false, userName: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
