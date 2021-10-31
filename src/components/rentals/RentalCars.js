import React from 'react';
import { useSelector } from 'react-redux';
import Cars from '../cars/Cars';

const RentalCars = () => {
  const cars = useSelector((state) => state.cars.rentals);
  return (
    <Cars rentals={cars} />
  );
};

export default RentalCars;
