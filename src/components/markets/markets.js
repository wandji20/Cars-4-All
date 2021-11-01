import React from 'react';
import { useSelector } from 'react-redux';
import CarLists from '../cars/CarLists';

const markets = () => {
  const cars = useSelector((state) => state.cars.sales);
  return (
    <section className="content p-2 overflow-auto">
      <CarLists cars={cars} />
    </section>
  );
};

export default markets;
