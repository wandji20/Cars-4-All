/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useParams, useHistory, NavLink, useLocation, Redirect,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { getCarShow } from '../../redux/cars/carActions';
import mercedez from '../../assets/mercedesbenz_Classe_C1.jpg';
import { getUser } from '../../helpers/token';

const CarInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // const { state } = useLocation();
  const sessionUser = getUser();

  const cars = useSelector((state)=> state.cars);
  const car = cars.rentals[id] || cars.sales[id];
  console.log(cars);

  // if (!(state && state.car)) {
  //   <Redirect to="/cars" />;
  // }


  const reviews = useSelector((state) => state.reviews.car);
  const rentals = useSelector((state) => state.rentals.car);

  const {
    manufacturer, model, location, price, year, status, transmission, mileage, group,
  } = car;

  useEffect(() => {
    dispatch(getCarShow(id));
  }, []);

  const style = {
    backgroundImage: `url(${mercedez})`,
  };

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <section className="content bg-gray-700 p-2 flex justify-around items-start flex-col text-white relative">
      <button type="button" className="absolute top-2 right-2" onClick={back}>
        <FontAwesomeIcon icon={faCaretSquareLeft} />
      </button>
      <div className="w-full">
        <h2 className="text-xl">{`${manufacturer} ${model} ${year}`}</h2>
        <p>Car Rating</p>
      </div>

      <div style={style} className="h-72 bg-cover relative w-full">
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
      <div className="flex justify-between w-full">
        <div className="block flex justify-between flex-col">
          <span className="inline-block">
            {car.horse_power}
            hp
          </span>
          {
            group === 'rent'
              ? (
                <>
                  <span className="inline-block">
                    Rentals Completed
                    (
                    {rentals.length}
                    )
                  </span>
                  <span className="inline-block">
                    Reviews
                    (
                    {reviews.length}
                    )
                  </span>
                </>
              )
              : (
                <span className="inline-block">
                  {location}
                </span>
              )
          }
        </div>
        <div className="block flex justify-between flex-col">
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
        {/* <div className="flex flex-col justify-start ">
        </div> */}
      </div>
      <div className="flex justify-between w-full">
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
        {
          car.owner_id === sessionUser.id && (
          <NavLink to={{
            pathname: `/profile/cars/${id}/edit`,
            state: { car },
          }}
          >
            <button type="button" className="bg-green-600 px-1">
              Update Info
            </button>
          </NavLink>
          )
        }
      </div>

    </section>
  );
};

export default CarInfo;
