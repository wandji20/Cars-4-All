import React, { useEffect } from 'react';
import { getCarsIndex } from '../../redux/cars/cars';
// import PropTypes from 'prop-types'

const cars = () => {
  useEffect(() => {
    getCarsIndex();
  }, []);
  return (

    <div>
      All cars
    </div>
  );
};

// cars.propTypes = {

// }

export default cars;
