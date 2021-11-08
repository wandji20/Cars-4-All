/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Car from './Car';

const CarLists = ({ cars }) => {
  // const { path } = useRouteMatch();
  // console.log(path);
  return (
    <>
      <ul className="h-auto">
        {
        Object.keys(cars).map((id) => (<Car car={cars[id]} key={id} />))
      }
      </ul>
      {/* <Outlet /> */}
    </>
  );
};

CarLists.propTypes = {
  cars: PropTypes.objectOf(PropTypes.shape({})).isRequired,
};

export default CarLists;
