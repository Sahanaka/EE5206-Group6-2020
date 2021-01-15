import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Register = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={{}}>
        <div className="form-group">
          <small className="form-text"> Name</small>
          <input
            type="text"
            placeholder="Name"
            name="name"
            // value={{}}
            // onChange={{}}
          />
        </div>
        <div className="form-group">
          <small className="form-text"> Address</small>
          <input
            type="text"
            placeholder="Address"
            name="name"
            // value={{}}
            // onChange={{}}
          />
          <small className="form-text"></small>
        </div>
        <div className="form-group">
          <small className="form-text"> Email</small>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            // value={{}}
            // onChange={{}}
          />
          <small className="form-text"></small>
        </div>
        <div className="form-group">
          <small className="form-text">Password</small>
          <input
            type="password"
            placeholder="Password"
            name="password"
            // value={{}}
            // onChange={{}}
          />
        </div>
        <div className="form-group">
          <small className="form-text"> Contact Number</small>
          <input
            type="number"
            placeholder="Contact Number"
            name="Number"
            // value={{}}
            // onChange={{}}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
