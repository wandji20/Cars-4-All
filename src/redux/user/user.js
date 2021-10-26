import { USER_CREATE } from './userActions';

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

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
