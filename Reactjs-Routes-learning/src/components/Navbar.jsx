import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/dashbord">Dashbord</NavLink>
        </li>
        <li>
          <NavLink to="/student">Students</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;