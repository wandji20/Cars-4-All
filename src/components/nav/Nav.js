import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import NavMenu from './NavMenu';

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggleNav = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <nav id="" className="nav-bar bg-gray-500 fixed-inset-0 flex justify-between items-center">
      <NavLink to="/" className="block h-auto pl-2">
        <span className="">
          cars-4-all
        </span>
      </NavLink>
      <NavMenu toggle={toggle} handleToggleNav={handleToggleNav} />
      <button
        type="button"
        className="h-auto pr-2"
        onClick={handleToggleNav}
      >
        {toggle && <FontAwesomeIcon icon={faBars} />}
        {!toggle && <FontAwesomeIcon icon={faTimes} />}
      </button>
    </nav>
  );
};

export default Nav;
