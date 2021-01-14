import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import { connect } from 'react-redux';
//import PropTypes from "prop-types";

import Logo from "../../img/Logo.png";

const Navbar = () => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={{}} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <img src={Logo} style={{ width: 70, height: 50 }} alt="Logo.png" />
          <i className="" /> S&D.COM
        </Link>
      </h1>
      <Fragment>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <a onClick={{}} href="#!">
              <i className="fas fa-sign-out-alt" />{" "}
              <span className="hide-sm">Logout</span>
            </a>
          </li>
        </ul>
      </Fragment>
    </nav>
  );
};

export default Navbar;
