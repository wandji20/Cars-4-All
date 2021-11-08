import React from 'react';
import { useSelector } from 'react-redux';
import CarLists from '../cars/CarLists';

const MarketsIndex = () => {
  const cars = useSelector((state) => state.cars.sales);
  return (
    <section className="content p-2 overflow-auto bg-gray-700">
      <CarLists cars={cars} />
    </section>
  );
};

export default MarketsIndex;
