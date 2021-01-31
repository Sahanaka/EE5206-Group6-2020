import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { registerCustomer } from '../../Actions/auth';

const Register = () => {
  const [formData, setFromData] = useState(
    {
        name: '',
        email: '',
        contactNo: '',
        password: '',
        rePassword: '',
    });

  const { name, address, contactNo, email, password, rePassword } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    registerCustomer(name, email, address, contactNo, password, rePassword);
    


};

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <small className="form-text"> Name</small>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form-text"> Address</small>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={e => onChange(e)}
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
            onChange={e => onChange(e)}
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
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form-text">Password</small>
          <input
            type="password"
            placeholder="ReEnter Password"
            name="rePassword"
            value={rePassword}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form-text"> Contact Number</small>
          <input
            type="number"
            placeholder="Contact Number"
            name="contactNo"
            value={contactNo}
            onChange={e => onChange(e)}
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