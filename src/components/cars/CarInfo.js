import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { getCarShow } from '../../redux/cars/carActions';
import mercedez from '../../assets/mercedesbenz_Classe_C1.jpg';

const CarInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector((state) => state.cars.car);
  const reviews = useSelector((state) => state.reviews.car);
  console.log(reviews);

  const {
    manufacturer, model, price, year, status, transmission, mileage, group,
  } = car;

  useEffect(() => {
    dispatch(getCarShow(id));
  }, []);

  const style = {
    backgroundImage: `url(${mercedez})`,
  };
  return (
    <section className="content">
      <div className="flex justify-start flex-col text-white">
        <div className="flex justify-between my-2">
          <h2 className="text-xl">{`${manufacturer} ${model} ${year}`}</h2>
          {
            group === 'rent' && (
            <button type="button" className="bg-green-600 px-1">
              {status === 'Available' ? 'Request Hire' : 'Cancel Request'}
            </button>
            )
          }
          {
            group === 'sale' && (
            <button type="button" className="bg-green-600 px-1">
              {status === 'Available' ? 'Order' : 'Cancel Order'}
            </button>
            )
          }
        </div>
        <div style={style} className="h-52 bg-cover relative">
          <ul className="absolute bottom-3 inset-x-0 flex justify-center">
            <li>
              <FontAwesomeIcon icon={faDotCircle} />
            </li>
            <li className="mx-3">
              <FontAwesomeIcon icon={faDotCircle} />
            </li>
            <li>
              <FontAwesomeIcon icon={faDotCircle} />
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <div className="block flex justify-between flex-col">
              <span className="inline-block">
                {car.horse_power}
                hp
              </span>
              <span className="inline-block">
                {mileage}
                km
              </span>
              <span className="inline-block">{transmission}</span>
              <span className="inline-block">
                <span>$</span>
                <span className="text-2xl">{`${price}`}</span>
              </span>
              {
                group === 'rent' && <span className="inline-block">Per Day</span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarInfo;
