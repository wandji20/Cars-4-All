import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ title, message }) => (
  <p className="text-red-500 text-xs w-full">
    {`${title} ${message}`}
  </p>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Error;
