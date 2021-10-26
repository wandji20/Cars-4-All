import React from 'react';
import { useSelector } from 'react-redux';
import Cars from '../cars/Cars';

const markets = () => {
  const cars = useSelector((state) => state.cars.markets);
  return (
    <Cars markets={cars} />
  );
};

export default markets;
