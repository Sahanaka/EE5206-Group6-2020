import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Background from "./img/mainimg.JPG";

import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import Store from "./components/auth/Store";
import Register from "./components/auth/Register";
import OrderAccept from "./components/Seller/OrderAccept";
import SellerMain from "./components/Seller/SellerMain";
import OrderList from "./components/Seller/OrderList";

import Alert from './components/layout/Alert';

function App() {
  return (
   <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div style={{ backgroundImage: `url(${Background})` }}></div>
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/orderAcccept" component={OrderAccept} /> 
           <Route exact path="/sellerMain" component={SellerMain} /> 
           <Route exact path="/OrderList" component={OrderList} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
