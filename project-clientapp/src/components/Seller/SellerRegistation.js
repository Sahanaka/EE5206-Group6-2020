import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setAlert } from "../../Actions/alert";
import { registerSeller } from "../../Actions/auth";

const Register = ({ setAlert, registerSeller }) => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
    rePassword: "",
    category: "",
  });

  const {
    name,
    address,
    contactNo,
    email,
    password,
    rePassword,
    category,
  } = formData;

  const onChange = (e) =>
    setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) setAlert("Passwords do not match", "danger");
    else
      registerSeller(
        name,
        email,
        address,
        contactNo,
        password,
        rePassword,
        category
      );
  };

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <small className="form-text"> Name</small>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <small className="form-text"> Address</small>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text"></small>
          </div>
          <div className="form-group">
            <small className="form-text"> Email</small>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text"></small>
          </div>
          <div className="form-group">
            <small className="form-text">Password</small>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <small className="form-text">Password</small>
            <input
              type="password"
              placeholder="ReEnter Password"
              name="rePassword"
              value={rePassword}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <small className="form-text"> Contact Number</small>
            <input
              type="number"
              placeholder="Contact Number"
              name="contactNo"
              value={contactNo}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="form-group">
            <small className="form-text"> Category</small>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text"></small>
          </div>

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerSeller: PropTypes.func.isRequired,
  //isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(null, { setAlert, registerSeller })(Register);
