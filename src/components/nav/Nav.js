import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import NavMenu from './NavMenu';

const Nav = () => (
  <nav id="" className="nav-bar bg-gray-500 fixed-inset-0 flex justify-between items-center">
    <NavLink to="#" className="block h-auto pl-2">
      <span className="">
        cars-4-all
      </span>
    </NavLink>
    <NavMenu />
    <button type="button" className="h-auto pr-2">
      <FontAwesomeIcon icon={faBars} />
    </button>
  </nav>
);

export default Nav;
