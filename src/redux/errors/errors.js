const ERROR = 'error';

export const errorAction = (error) => ({
  type: ERROR, payload: error,
});

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export default errorReducer;
