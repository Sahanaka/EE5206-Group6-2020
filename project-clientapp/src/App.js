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
import SellerMain from "./components/auth/SellerRegistation";
import OrderList from "./components/Seller/OrderList";
import ProductList from "./components/Seller/ProductList";
import Alert from "./components/layout/Alert";
import Items from "./components/items/items";
import itemlist from "./components/buyercart/itemlist";
import Mainregistation from "./components/auth/Mainregistation";
import Shops from "./components/Customer/Shops";
import Shop from "./components/Customer/shop";

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
            <Route exact path="/OrderList" component={OrderList} />{" "}
            <Route exact path="/Mainregistation" component={Mainregistation} />
            {/* still not complete*/}
            <Route exact path="/ProductList" component={ProductList} />
            <Route exact path="/Items" component={Items} />
            <Route exact path="/itemlist" component={itemlist} />
            <Route exact path="/shops" component={Shops} />
            <Route exact path="/shop/:id" component={Shop} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
