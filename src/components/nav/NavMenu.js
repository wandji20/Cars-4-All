import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const NavMenu = () => {
  const pages = ['rental', 'market'];
  const featuredCars = ['', 'Sedan', 'Suv', 'Vans', 'Truck'];

  return (
    <div
      className="w-1/2 flex flex-col items-start justify-around absolute nav-menu bg-gray-100 px-4 bg-gray hidden"
    >
      <div className="h-auto border-black w-full">
        <span className="inline-block">Pages</span>
        <span className="inline-block ml-2">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
        <ul id="pages" className="w-full hidden">
          {
              pages.map((page) => (
                <li key={page} value={page}>
                  <NavLink to="#">
                    <span>{page}</span>
                  </NavLink>
                </li>
              ))
            }
        </ul>
      </div>

      <NavLink to="#" className="inline-block">
        <span>Testimonial</span>
      </NavLink>

      <div className=" w-full h-auto">
        <span>Featured Cars</span>
        <span className="inline-block ml-2">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
        <ul id="featured-cars" className="ml-2 hidden">
          {
              featuredCars.map((category) => (
                <li key={category} value={category}>
                  <NavLink to="#">
                    <span>{category}</span>
                  </NavLink>
                </li>
              ))
            }
        </ul>
      </div>

      <NavLink to="#" className="inline-block">
        <span>More</span>
      </NavLink>

      <NavLink to="#" className="inline-block">
        <span>Contact</span>
      </NavLink>

      <NavLink to="#" className="inline-block">
        <span>Testimonial</span>
      </NavLink>

      <NavLink to="#" className="inline-block">
        <span>Profile</span>
      </NavLink>

    </div>
  );
};
export default NavMenu;
