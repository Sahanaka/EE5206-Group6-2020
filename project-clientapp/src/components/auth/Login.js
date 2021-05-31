import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "w3-css/w3.css";
import "./style/login.css";
import "./style/Button.css";
import { login } from "../../Actions/auth";

const Login = ({ login, isAuthenticated, role, user }) => {
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

  if (isAuthenticated && role) {
    if (role.role === "Customer") return <Redirect to="/shops" />;
    else if (role.role == "Seller")
      return <Redirect to={`/sellerMain/${role.id}`} />;
    else console.log(role.role);
  }

  return (
    <div className="background">
      <h1 className="text textloging ">
        Don't have an account? <Link to="/Mainregistration">Sign Up</Link>
      </h1>
      <div className="box_login w3-container squre_login">
        <h1 className="large text-primary textalighn1">Sign In</h1>
        <p className="textcolor1 ">
          <i className="fas fa-user " /> Sign Into Your Account
        </p>
        <form className="form_login" onSubmit={(e) => onSubmit(e)}>
          <div className="">
            <div className="form-group ">
              <small className="textcolor1  "> Name or Email</small>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="fullname hight"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <small className="textcolor1"> Password</small>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="button " value="Login" />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  role: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login })(Login);
