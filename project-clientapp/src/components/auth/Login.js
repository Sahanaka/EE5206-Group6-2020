import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/Button.css";
import { Route,Router} from "react-router-dom";
import { login } from '../../Actions/auth';
import  Landing  from '../layout/Landing';
import ReactDOM from 'react-dom'

const Login = () => {
  const [formData, setFromData] = useState(
      {
          email: '',
          password: '',
      }
  );

  const [isAuthenticated, setIsAuthenticated] = useState('false');

  const { email, password } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();

    if (login(email, password)){
      console.log("Place")
      
      // ReactDOM.render(
      //   <Router>
      //     <Landing/>
      //   </Router>
        
        
      //)
      //setIsAuthenticated = 'true';
      return <Redirect to='/store' />
    }
    
    
};

// if (isAuthenticated)
//         return <Redirect to='/store' />

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign Into Your Account
        </p>
        <form className="form"  onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <div className="form-group">
              <small className="form-text"> Name or Email</small>
              <input
                type="text"
                placeholder="Email"
                name="email"
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
