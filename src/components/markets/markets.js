import React from 'react';
import { useSelector } from 'react-redux';
import CarLists from '../cars/CarLists';

const markets = () => {
  const cars = useSelector((state) => state.cars.sales);
  return (
    <CarLists cars={cars} />
  );
};

export default markets;
