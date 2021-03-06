import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";


import "./App.css";
import Background from "./img/mainimg.JPG";

import store from "./store";
import CustomerItems from './components/Customer/customerItems';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import OrderAccept from "./components/Seller/OrderAccept";
import SellerMain from "./components/Seller/SellerMain";
import OrderList from "./components/Seller/OrderList";
import ProductList from "./components/Seller/ProductList";
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";
import Mainregistation from "./components/auth/Mainregistation";
import SellerRegistration from "./components/auth/SellerRegistation";
import Shops from "./components/Customer/Shops";
import Shop from "./components/Customer/shop";
import ShopItemsSeller from "./components/Seller/shopItemsSeller";
import { loadUser } from "./Actions/auth";
import { LOGOUT } from "./Actions/types";
import Buy from "./components/buy/buy";
import Aboutus from "./components/aboutus";
import Profile from "./components/Customer/Profile";
import Popup from "./components/Customer/popup";
import Sellerlist from "./components/admin/Sellerlist";
import AdminPannel from "./components/admin/admin";
import Customerlist from "./components/admin/Custormerlsit";
import Addcategory from "./components/admin/addcatogery";

require('dotenv').config();

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  console.log("App", process.env.REACT_APP_DEV_API_URL)
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
            <Route exact path="/Register" component={Register} />
            <PrivateRoute exact path="/orderAcccept" component={OrderAccept} />
            <PrivateRoute exact path="/sellerMain/:id" component={SellerMain} />
            <PrivateRoute
              exact
              path="/ShopItemsSeller/:id"
              component={ShopItemsSeller}
            />
            <Route exact path ="/Buy" component={Buy} />
            <PrivateRoute exact path ="/Sellerlist" component={Sellerlist} />
            <PrivateRoute exact path ="/AdminPanel" component={AdminPannel} />
            <PrivateRoute exact path ="/Customerlist" component={Customerlist} />
            <Route exact path ="/Popup" component={Popup} />
            <Route exact path ="/Aboutus" component={Aboutus}/>
            <PrivateRoute exact path ="/Profile" component={Profile}/>
            <PrivateRoute exact path="/OrderList/:id" component={OrderList} />{" "}
            <Route exact path="/Mainregistration" component={Mainregistation} />
            <Route exact path="/Addcategory" component={Addcategory} />
            <Route
              exact
              path="/selleRegistation"
              component={SellerRegistration}
            />
            
            <PrivateRoute exact path="/ProductList" component={ProductList} />
            <PrivateRoute exact path="/shops" component={Shops} />
            <PrivateRoute exact path="/shop/:id" component={Shop} />
            <PrivateRoute exact path="/CustomerItems" component={CustomerItems} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
