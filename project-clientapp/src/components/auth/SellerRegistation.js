import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style/sellerregister.css";
import { setAlert } from "../../Actions/alert";
import { registerSeller } from "../../Actions/auth";
import "w3-css/w3.css";
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
    <div className="background12 ">
      <div className=" w3-container bo78   squre78">
        <h1 className="large text-primary textcenter78">Sign Up</h1>
        <div className="itemcenter78">
          {/* <p className="">
          <i className="fas fa-user" /> Create Your Account
        </p> */}
          <form className="form " onSubmit={(e) => onSubmit(e)}>
            <div className="">
              {/* <small className=""> Name</small> */}
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="">
              {/* <small className=""> Address</small> */}
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={address}
                onChange={(e) => onChange(e)}
              />
              <small className=""></small>
            </div>
            <div className="">
              {/* <small className=""> Email</small> */}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <small className=""></small>
            </div>
            <div className="">
              {/* <small className="">Password</small> */}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="">
              {/* <small className="">Password</small> */}
              <input
                type="password"
                placeholder="ReEnter Password"
                name="rePassword"
                value={rePassword}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="">
              {/* <small className=""> Contact Number</small> */}
              <input
                type="text"
                placeholder="Contact Number"
                name="contactNo"
                value={contactNo}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="">
              {/* <small className=""> Category</small> */}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <small className=""></small>
            </div>

            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
          <p className="color78">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
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
