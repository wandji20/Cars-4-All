import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';

const Home = () => {
  const messages = [
    { text: 'Get 2% Discount on all Rentals' },
    { text: 'Free shipping within 200km' },
  ];
  const number = Math.floor(Math.random() * messages.length);
  console.log('In Home');
  return (
    <>
      <section className="w-full bg-gray-100 home flex justify-center items-center">

        <div className="m-auto w-4/5  border-4 border-light-blue-500 border-opacity-100 text-center px-2 py-4">
          <h1 className=" my-7">FIND YOUR DREAM CARS</h1>
          <p className="my-4">{messages[number].text}</p>
          <NavLink to="cars/rentals" className="block px-2 py-1 mb-4 mt-6 border-0 rounded bg-gray-700">
            <span className="inline-block mr-4">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
            <h1 className="inline-block m-auto">REQUEST CAR</h1>
          </NavLink>
          <NavLink to="cars/markets" className="block px-2 py-1 my-4 border-0 rounded bg-gray-700">
            <span className="inline-block mr-4">
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            <h1 className="inline-block">CAR MARKET</h1>
          </NavLink>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
