import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/Button.css";

const Login = () => {
  return (
    <Fragment>
      <section className="container">
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
          <input type="submit" className="btn" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
