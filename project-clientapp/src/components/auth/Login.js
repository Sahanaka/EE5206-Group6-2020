import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./style/Button.css";
import { login } from "../../Actions/auth";

const Login = ({ login, isAuthenticated, user }) => {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated && user) {
    if (user.role === "Customer")
      return <Redirect to="/shops" />;
    else if (user.role == "Seller") 
      return <Redirect to={`/sellerMain/${user.id}`} />
    else
      console.log(user.role);
  }

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign Into Your Account
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <div className="form-group">
              <small className="form-text"> Name or Email</small>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/Mainregistration">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login })(Login);
