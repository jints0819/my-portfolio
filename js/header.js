import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
    <div className="container">
    <h1 className="color--white">Emily Lu</h1>
    <div className="menufont">
    <NavLink to="/" activeClassName="mx-lg-1" exact={true}>Work </NavLink>
    <NavLink to="/about" activeClassName="mx-lg-1">About </NavLink>
    <NavLink to="/contact" activeClassName="mx-lg-1">Contact </NavLink>
    </div>
    </div>
    </nav>
  </header>
);

export default Header;
