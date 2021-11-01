import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { logOutAction } from '../../redux/user/userActions';
import { setToken } from '../../helpers/token';

const NavMenu = (props) => {
  const { toggle, handleToggleNav } = props;
  const pages = ['rentals', 'markets'];
  const featuredCars = ['', 'Sedan', 'Suv & Crossover', 'Van & Bus', 'Truck'];

  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const [togglePages, setTogglePages] = useState(false);
  const [toggleFeaturedCars, setToggleFeaturedCars] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const resetToggles = () => {
    setToggleFeaturedCars(false);
    setTogglePages(false);
    setToggleProfile(false);
  };

  return (
    <div
      className={toggle ? 'hidden' : 'w-1/2 flex flex-col items-start justify-around absolute nav-menu bg-gray-100 px-4 h-auto'}
    >
      <div className="h-auto border-black w-full">
        <button className="inline" type="button" onClick={() => setTogglePages((prev) => !prev)}>
          <span className="inline-block">Pages</span>
          <span className="inline-block ml-2">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </button>
        <ul
          id="pages"
          className={togglePages ? 'w-auto ml-5 border-4 border-light-blue-500' : 'hidden'}
        >
          {
              pages.map((page) => (
                <li key={page}>
                  <NavLink to={`/${page}`} onClick={() => { handleToggleNav(); resetToggles(); }}>
                    <span>{page}</span>
                  </NavLink>
                </li>
              ))
            }
        </ul>
      </div>

      <NavLink to="/testimonials" className="inline-block" onClick={() => { handleToggleNav(); resetToggles(); }}>
        <span>Testimonial</span>
      </NavLink>

      <div className=" w-full h-auto relative">
        <button
          className="inline"
          type="button"
          onClick={() => { setToggleFeaturedCars((prev) => !prev); }}
        >
          <span>Featured Cars</span>
          <span className="inline-block ml-2">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </button>
        <ul
          id="featured-cars"
          className={toggleFeaturedCars ? 'border-4 border-light-blue-500 ml-5' : 'hidden'}
        >
          {
              featuredCars.map((category) => (
                <li key={category}>
                  <NavLink to="#" onClick={() => { handleToggleNav(); resetToggles(); }}>
                    <span>{category}</span>
                  </NavLink>
                </li>
              ))
            }
        </ul>
      </div>

      <NavLink to="/more" className="inline-block" onClick={() => { handleToggleNav(); resetToggles(); }}>
        <span>More</span>
      </NavLink>

      <NavLink to="/contact" className="inline-block" onClick={() => { handleToggleNav(); resetToggles(); }}>
        <span>Contact</span>
      </NavLink>

      <div className=" w-full h-auto">
        <button className="inline" type="button" onClick={() => setToggleProfile((prev) => !prev)}>
          <span>Profile</span>
          <span className="inline-block ml-2">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </button>
        <ul
          id="user-features"
          className={toggleProfile ? 'ml-5 border-4 border-light-blue-500' : 'hidden'}
        >
          {
            !loggedIn
            && (
            <>
              <li>
                <NavLink to="/login" onClick={() => { handleToggleNav(); resetToggles(); }}>
                  <span>Login</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="sign_up" onClick={() => { handleToggleNav(); resetToggles(); }}>
                  <span>Signup</span>
                </NavLink>
              </li>
            </>
            )

          }
          {
            loggedIn && (
            <>
              <li>
                <NavLink to="/profile" onClick={() => { handleToggleNav(); resetToggles(); }}>
                  <span>Account</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    handleToggleNav();
                    resetToggles();
                    dispatch(logOutAction());
                    setToken('');
                  }}
                >
                  <span>Logout</span>
                </NavLink>
              </li>
            </>
            )
          }
        </ul>
      </div>

    </div>
  );
};

NavMenu.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggleNav: PropTypes.func.isRequired,
};
export default NavMenu;
