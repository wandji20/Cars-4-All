import React from 'react';
import PropTypes from 'prop-types';

const Cars = ({ cars }) => {
  console.log(cars);
  return (
    <div>
      Render list of cars
    </div>
  );
};

Cars.propTypes = {
  cars: PropTypes.objectOf(PropTypes.shape({})).isRequired,
};

export default Cars;
