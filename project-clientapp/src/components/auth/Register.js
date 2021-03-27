import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style/Register.css";

import { setAlert } from "../../Actions/alert";
import { registerCustomer } from "../../Actions/auth";
import "w3-css/w3.css";

const Register = ({ setAlert, registerCustomer }) => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
    rePassword: "",
  });

  const { name, address, contactNo, email, password, rePassword } = formData;

  const onChange = (e) =>
    setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) setAlert("Passwords do not match", "danger");
    else
      registerCustomer(name, email, address, contactNo, password, rePassword);
  };

  return (
    <div className="background12">
      <div className="text">
        <div className="float">
          <h1>Sign Up</h1>
          <p>
            <i /> Create Your Account
          </p>
          <p className="my-1 w3-animate-right">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>

      <div className="box ">
        <form className="w3-container squre " onSubmit={(e) => onSubmit(e)}>
          {/* <small> Name</small> */}
          <input
            type="text"
            className="fullname "
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />

          {/* <small className="form-text"> Address</small> */}
          <input
            type="text"
            placeholder="Address "
            className="fullname "
            name="address"
            value={address}
            onChange={(e) => onChange(e)}
          />

          {/* <small> Email</small> */}
          <input
            type="email"
            placeholder="Email Address"
            className="fullname "
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          {/* <small className="form-text"></small>

          <small>Password</small> */}
          <input
            type="password"
            placeholder="Password"
            className="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />

          {/* <small>Password</small> */}
          <input
            type="password"
            placeholder="ReEnter Password"
            className="password"
            name="rePassword"
            value={rePassword}
            onChange={(e) => onChange(e)}
          />

          {/* <small> Contact Number</small> */}
          <input
            type="text"
            placeholder="Contact Number"
            name="contactNo"
            className="fullname "
            value={contactNo}
            onChange={(e) => onChange(e)}
          />
          <div className="btt">
            <input type="submit" className="button " value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerCustomer: PropTypes.func.isRequired,
  //isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(null, { setAlert, registerCustomer })(Register);
