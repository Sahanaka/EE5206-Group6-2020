import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={{}}>
        <div className="form-group">
          <div className="form-group">
            <small className="form-text"> Name or Email</small>
            <input
              type="text"
              placeholder="Name"
              name="name"
              //   value={{}}
              //   onChange={{}}
            />
          </div>
        </div>
        <div className="form-group">
          <small className="form-text"> Password</small>
          <input
            type="password"
            placeholder="Password"
            name="password"
            // value={{}}
            // onChange={{}}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
