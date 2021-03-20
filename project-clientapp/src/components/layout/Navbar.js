import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import { connect } from 'react-redux';
//import PropTypes from "prop-types";

import Logo from "../../img/Logo.png";

const Navbar = () => {
  const authLinks = (
    <div className="stick">
      <ul>
        <li>
          <a onClick={{}} href="#!">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/Mainregistation">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1>
        <Link to="/">
          <img src={Logo} style={{ width: 60, height: 50 }} alt="Logo.png" />
          <i className="" /> S&D.COM
        </Link>
      </h1>
      <Fragment>
        <ul>
          <li>
            <Link to="/shops">Store</Link>
          </li>
          <li>
            <Link to="/Mainregistation">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Fragment>
    </nav>
  );
};

export default Navbar;
