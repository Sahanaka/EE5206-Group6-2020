import React, { useState, useEffect, Fragment } from "react";
import { Container, Nav } from "./SellerMainitems/styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Style/SellerMainstyle.css";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "./SellerMainitems/charts-theme";
import Spinner from "../layout/Spinner";

import { loadUser } from '../../Actions/auth';



ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

const SellerMain = ({ user: { user, loading } }) => {
  const [totalRevenue, setTotalRevenue] = useState();
  const [totalOrders, setTotalOrders] = useState();
  console.log("userrrr", user);

  useEffect(() => {
    
    setTotalRevenue(100);
    setTotalOrders(1);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Container>
            <div>
              
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>RoyalUI Admin</title>
              
              <link
                rel="stylesheet"
                href="vendors/ti-icons/css/themify-icons.css"
              />
              <link
                rel="stylesheet"
                href="vendors/base/vendor.bundle.base.css"
              />
              
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover:not(.active) {\n  background-color: #111;\n}\n\n.active {\n  background-color: #4CAF50;\n}\n",
                }}
              />

              <link rel="stylesheet" href="css/style.css" />
              
              <link rel="shortcut icon" href="images/favicon.png" />

              <style
                dangerouslySetInnerHTML={{
                  __html: "\nbody {\n  background-color: lightgray;\n}\n",
                }}
              />

              <div className="container-scroller">
               

                <div className="sellermain">
                  <div className="container-fluid page-body-wrapper">
                    
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                      <ul className="nav">
                        <li className="nav-item">
                          <a className="nav-link" href="index.html">
                            <i className="ti-shield menu-icon" />
                            <span className="menu-title">Dashboard</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#ui-basic"
                            aria-expanded="false"
                            aria-controls="ui-basic"
                          >
                            <i className="ti-palette menu-icon" />
                            <span className="menu-title">My Profile</span>
                            <i className="menu-arrow" />
                          </a>
                          <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                              <li className="nav-item">
                                {" "}
                                <a
                                  className="nav-link"
                                  href="pages/ui-features/buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="nav-item">
                                {" "}
                                <a
                                  className="nav-link"
                                  href="pages/ui-features/typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <i className="ti-layout-list-post menu-icon" />
                          <Link to="/store">Store</Link>
                        </li>
                        <li className="nav-item">
                          <i className="ti-layout-list-post menu-icon" />
                          <Link to="/ProductList">Products</Link>
                        </li>
                        <li className="nav-item">
                          <i className="ti-layout-list-post menu-icon" />
                          <Link to={`/ShopItemsSeller/${1}`}>Shop Items</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            
            <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
              
              <Container className="row">
                <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
                  <Container className="card grid-card is-card-dark">
                    <Container className="card-heading">
                      <Container className="is-dark-text-light letter-spacing text-small">
                        Total Revenue
                      </Container>
                    </Container>

                    <Container className="card-value pt-4 text-x-large">
                      <span className="text-large pr-1">Rs</span>
                      {totalRevenue}
                    </Container>
                  </Container>
                </Container>

                <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
                  <Container className="card grid-card is-card-dark">
                    <Container className="card-heading">
                      <Container className="is-dark-text-light letter-spacing text-small">
                        Total Orders
                      </Container>
                      <Container className="card-heading-brand">
                        
                      </Container>
                    </Container>

                    <Container className="card-value pt-4 text-x-large">
                      <span className="text-large pr-1"></span>
                      
                      {totalOrders}
                    </Container>
                  </Container>
                </Container>

                <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
                  <Container className="card grid-card is-card-dark">
                    <Container className="card-heading">
                      <Container className="is-dark-text-light letter-spacing text-small">
                        Complete Orders
                      </Container>
                      <Container className="card-heading-brand">
                        
                      </Container>
                    </Container>

                    <Container className="card-value pt-4 text-x-large">
                      <span className="text-large pr-1"></span>
                      
                    </Container>
                  </Container>
                </Container>

                <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
                  <Container className="card grid-card is-card-dark">
                    <Container className="card-heading">
                      <Container className="is-dark-text-light letter-spacing text-small">
                        Pending Orders
                      </Container>
                      <Container className="card-heading-brand">
                        
                      </Container>
                    </Container>

                    <Container className="card-value pt-4 text-x-large">
                      <span className="text-large pr-1"></span>
                      
                    </Container>
                  </Container>
                </Container>
              </Container>

              
              <Container className="row">
                <Container className="col-md-4 col-lg-3 is-light-text mb-4">
                  <Container className="card grid-card is-card-dark">
                    <Container className="card-heading mb-3">
                      <Container className="is-dark-text-light letter-spacing text-small">
                        Deliver Cost
                      </Container>
                    </Container>
                    <Container className="card-value pt-4 text-x-large">
                      <span className="text-medium pl-2 is-dark-text-light">
                        views
                      </span>
                    </Container>
                  </Container>
                </Container>

                <Container className="col-md-8 col-lg-9 is-light-text mb-4">
                  <Container className="card is-card-dark chart-card">
                    <Container className="row full-height">
                      <Container className="col-sm-4 full height">
                        <Container className="chart-container full-height">
                          <ReactFC
                            {...{
                              type: "doughnut2d",
                              width: "100%",
                              height: "100%",
                              dataFormat: "json",
                              containerBackgroundOpacity: "0",
                              dataSource: {
                                chart: {
                                  caption: "Purchase Rate",
                                  theme: "ecommerce",
                                  
                                  paletteColors: "#3B70C4, #000000",
                                },
                                data: [
                                  {
                                    label: "active",
                                    
                                  },
                                  {
                                    label: "inactive",
                                    alpha: 5,
                                    
                                  },
                                ],
                              },
                            }}
                          />
                        </Container>
                      </Container>
                      <Container className="col-sm-4 full-height border-left border-right">
                        <Container className="chart-container full-height">
                          <ReactFC
                            {...{
                              type: "doughnut2d",
                              width: "100%",
                              height: "100%",
                              dataFormat: "json",
                              containerBackgroundOpacity: "0",
                              dataSource: {
                                chart: {
                                  caption: "Checkout Rate",
                                  theme: "ecommerce",
                                  
                                  paletteColors: "#41B6C4, #000000",
                                },
                                data: [
                                  {
                                    label: "active",
                                    
                                  },
                                  {
                                    label: "inactive",
                                    alpha: 5,
                                    
                                  },
                                ],
                              },
                            }}
                          />
                        </Container>
                      </Container>
                      <Container className="col-sm-4 full-height">
                        <Container className="chart-container full-height">
                          <ReactFC
                            {...{
                              type: "doughnut2d",
                              width: "100%",
                              height: "100%",
                              dataFormat: "json",
                              containerBackgroundOpacity: "0",
                              dataSource: {
                                chart: {
                                  caption: "Abandoned Cart Rate",
                                  theme: "ecommerce",
                                  
                                  paletteColors: "#EDF8B1, #000000",
                                },
                                data: [
                                  {
                                    label: "active",
                                    
                                  },
                                  {
                                    label: "inactive",
                                    alpha: 5,
                                    
                                  },
                                ],
                              },
                            }}
                          />
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

SellerMain.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth,
});


export default connect(mapStateToProps)(SellerMain);
