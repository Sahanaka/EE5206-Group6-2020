import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFromData] = useState(
      {
          email: '',
          password: '',
      }
  );

  const { email, password } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
      e.preventDefault();
      login(email, password); 
      console.log(email) 
      console.log(password) 
  };

 
 
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <div className="form-group">
            <small className="form-text"> Name or Email</small>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <div className="form-group">
          <small className="form-text"> Password</small>
          <input
            type="password"
            placeholder="Password"
            name="password"
             value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="login/" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
