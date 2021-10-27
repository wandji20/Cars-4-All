import React from 'react';
import PropTypes from 'prop-types';

const SlideError = ({ message }) => (
  <p>
    {message}
  </p>
);

SlideError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SlideError;
