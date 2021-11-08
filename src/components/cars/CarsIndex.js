import React from 'react';
import { useSelector } from 'react-redux';
import CarLists from './CarLists';

const CarsIndex = () => {
  const { rentals, sales } = useSelector((state) => state.cars);
  return (
    <section className="content p-2 overflow-auto bg-gray-700">
      <div className="h-auto">
        <h2 className="my-2">Rentals</h2>
        <CarLists cars={rentals} />
      </div>
      <div className="h-auto">
        <h2 className="my-2">Markets</h2>
        <CarLists cars={sales} />
      </div>
    </section>
  );
};

export default CarsIndex;
