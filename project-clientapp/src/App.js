import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Background from "./img/mainimg.JPG";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div style={{ backgroundImage: `url(${Background})` }}></div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} /> 
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
