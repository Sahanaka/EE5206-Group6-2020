import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Background from "./img/mainimg.JPG";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import Store from "./components/auth/Store";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div style={{ backgroundImage: `url(${Background})` }}></div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/store" component={Store} />
          {/* <Route exact path="/Register" component={Register} /> */}
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
