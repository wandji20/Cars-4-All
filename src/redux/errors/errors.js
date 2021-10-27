const ERROR = 'error/errors';
const NOTIFICATION = 'error/notification';

export const errorAction = (error) => ({
  type: ERROR, payload: error,
});

export const notificationAction = (notification) => ({
  type: NOTIFICATION, payload: notification,
});

const initialState = {
  errors: {},
  message: '',
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        errors: action.payload,
        message: '',
      };
    }
    case NOTIFICATION: {
      return {
        errors: {},
        message: action.payload,
      };
    }

    default:
      return state;
  }
};

export default errorReducer;
