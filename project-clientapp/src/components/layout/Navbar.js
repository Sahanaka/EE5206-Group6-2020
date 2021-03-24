import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { logout } from "../../Actions/auth";

import Logo from "../../img/Logo.png";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <div className="stick">
      <ul>
        <li>
          <a onClick={logout} href="#!">
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
        <Link to="/shops">Shops</Link>
      </li>
      <li>
        <Link to="/Mainregistration">Register</Link>
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
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
