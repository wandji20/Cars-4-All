import React from 'react';
import { useSelector } from 'react-redux';
import CarLists from '../cars/CarLists';

const RentalCars = () => {
  const cars = useSelector((state) => state.cars.rentals);
  return (
    <section className="content p-2 overflow-auto bg-gray-700">
      <CarLists cars={cars} />
    </section>
  );
};

export default RentalCars;
