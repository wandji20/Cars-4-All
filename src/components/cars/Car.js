import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import mercedez from '../../assets/mercedesbenz_Classe_C1.jpg';

const Car = ({ car }) => {
  const {
    location, group, manufacturer, model, year, price, id,
  } = car;
  const style = {
    backgroundImage: `url(${mercedez})`,
  };
  return (

    <article style={style} className="h-52 flex flex-col justify-between bg-cover text-white my-2">

      <p className="p-2 flex justify-between">
        <NavLink to={{
          pathname: `/cars/${id}`,
          state: { car },
        }}
        >
          <button type="button" className="bg-green-500 px-1">
            More
          </button>
        </NavLink>
        <span className="inline-block">
          { group === 'rent' ? 'Available' : location }
        </span>
      </p>
      <div className="p-2 flex justify-between">
        <div className="block flex flex-col">
          <h3 className="inline-block">
            {`${manufacturer} ${model} ${year}`}
          </h3>
          <span className="inline-block">
            Automatic
          </span>
        </div>
        <div className="block flex justify-between flex-col">
          <span className="inline-block">
            <span>$</span>
            <span className="text-2xl">{`${price}`}</span>
          </span>
          {
            car.group === 'rent' && <span className="inline-block">Per Day</span>
          }
        </div>
      </div>
    </article>

  );
};

Car.propTypes = {
  car: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Car;
