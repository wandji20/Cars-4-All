import React from 'react';
import PropTypes from 'prop-types';
import Car from './Car';

const CarLists = ({ cars }) => (
  <ul className="h-auto">
    {
        Object.keys(cars).map((id) => (<Car car={cars[id]} key={id} />))
      }
  </ul>
);

CarLists.propTypes = {
  cars: PropTypes.objectOf(PropTypes.shape({})).isRequired,
};

export default CarLists;
