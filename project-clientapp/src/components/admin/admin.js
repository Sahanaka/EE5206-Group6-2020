import React, { Component } from "react";
import { Container, Nav } from "./styled-components";
import { Link } from "react-router-dom";
import "./Style/adminstyle.css";

import SellerList from "./Sellerlist";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "./charts-theme";

import config from "./config";
import Dropdown from "react-dropdown";
import formatNum from "./format-number";

import { getDashboardData } from "../../Actions/admin";
// import UserImg from "../assets/images/user-img-placeholder.jpeg";

ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

//const SellerMain = ({ match }) => {

class SellerMain extends Component {
  constructor() {
    super();
    this.state = {
      totalUsers: null,
      numberofSellers: null,
      numberofCustomers: null
    };
  }

  async componentDidMount() {
    const res = await getDashboardData();
    console.log("rerer", res)
    this.setState({
      totalUsers: res[0] + res[1],
      numberofCustomers: res[0],
      numberofSellers: res[1]
    })
  }

  render() {
    //console.log(this.props.match.params.id);

    return (
      <Container>
        <div>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>RoyalUI Admin</title>
          {/* plugins:css */}
          <link
            rel="stylesheet"
            href="vendors/ti-icons/css/themify-icons.css"
          />
          <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css" />
          {/* endinject */}

          {/*navigation bar link*/}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover:not(.active) {\n  background-color: #111;\n}\n\n.active {\n  background-color: #4CAF50;\n}\n",
            }}
          />

          {/* plugin css for this page */}
          {/* End plugin css for this page */}
          {/* inject:css */}
          <link rel="stylesheet" href="css/style.css" />
          {/* endinject */}
          <link rel="shortcut icon" href="images/favicon.png" />

          <style
            dangerouslySetInnerHTML={{
              __html: "\nbody {\n  background-color: lightgray;\n}\n",
            }}
          />

          <div className="container-scroller">
            {/* partial:partials/_navbar.html */}

            {/* partial */}

            <div className="sellermain">
              <div className="container-fluid page-body-wrapper">
                {/* partial:partials/_sidebar.html */}
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link" href="./Sellerlist">
                        <i className="ti-shield menu-icon" />
                        <span className="menu-title">Sellers</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./Sellerlist">
                        <i className="ti-shield menu-icon" />
                        <span className="menu-title">Store</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="collapse"
                        href="./Customerlist"
                        aria-expanded="false"
                        aria-controls="ui-basic"
                      >
                        <i className="ti-palette menu-icon" />
                        <span className="menu-title">Customer</span>
                        <i className="menu-arrow" />
                      </a>

                      {/* <div className="collapse" id="ui-basic">
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
                  </div> */}
                    </li>
                    {/* <li className="nav-item">
                    <i className="ti-layout-list-post menu-icon" />
                    <Link to="/store">Store</Link>
                </li> */}
                    {/* <li className="nav-item">
                    <i className="ti-layout-list-post menu-icon" />
                    <Link to="/ProductList">Products</Link>
                </li>
                <li className="nav-item">
                    <i className="ti-layout-list-post menu-icon" />
                    <Link to={`/ShopItemsSeller/${1}`}>Shop Items</Link>
                </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* static navbar - top */}
        {/* <Nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
            <Container className="navbar-brand h1 mb-0 text-large font-medium">
              Seller Dashboard
            </Container>
            <Container className="navbar-nav ml-auto">
              <Container className="user-detail-section">
                <span className="pr-2">Hi, Sean</span>
                <span className="img-container">
                  <img src={} className="rounded-circle" alt="user" /> 
                </span>
              </Container>
            </Container>
          </Nav> */}

        {/* static navbar - bottom */}
        {/* <Nav className="navbar fixed-top nav-secondary is-dark is-light-text">
            <Container className="text-medium">Summary</Container>
            <Container className="navbar-nav ml-auto">
              <Dropdown
                className="pr-2 custom-dropdown"
                options={this.state.dropdownOptions}
                onChange={this.updateDashboard}
                value={this.state.selectedValue}
                placeholder="Select an option"
              />
            </Container>
          </Nav> */}

        {/* content area start */}
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/* row 1 - revenue */}
          <Container className="row">
            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Total Buyers
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.totalUsers}
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Total Sellers
                  </Container>
                  <Container className="card-heading-brand">
                    {/* <i className="fab fa-amazon text-large" /> */}
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.numberofSellers}
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Total Customers
                  </Container>
                  <Container className="card-heading-brand">
                    {/* <i className="fab fa-ebay text-x-large logo-adjust" /> */}
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.numberofCustomers}
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
                    {/* <i className="fab fa-etsy text-medium" /> */}
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.etRevenue}
                </Container>
              </Container>
            </Container>
          </Container>

          <Container className="row">
            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Total Stores
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.total}
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Total Products
                  </Container>
                  <Container className="card-heading-brand">
                    {/* <i className="fab fa-amazon text-large" /> */}
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.amRevenue}
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Monthly Total Orders
                  </Container>
                  <Container className="card-heading-brand">
                    {/* <i className="fab fa-ebay text-x-large logo-adjust" /> */}
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.ebRevenue}
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
                    {/* <i className="fab fa-etsy text-medium" /> */}
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.etRevenue}
                </Container>
              </Container>
            </Container>
          </Container>

          {/* row 2 - conversion
            <Container className="row">
              <Container className="col-md-4 col-lg-3 is-light-text mb-4">
                <Container className="card grid-card is-card-dark">
                  <Container className="card-heading mb-3">
                    <Container className="is-dark-text-light letter-spacing text-small">
                      Deliver Cost
                    </Container>
                  </Container>
                  <Container className="card-value pt-4 text-x-large">
                    {this.state.productViews}
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
                                defaultCenterLabel: `${this.state.purchaseRate}%`,
                                paletteColors: "#3B70C4, #000000"
                              },
                              data: [
                                {
                                  label: "active",
                                  value: `${this.state.purchaseRate}`
                                },
                                {
                                  label: "inactive",
                                  alpha: 5,
                                  value: `${100 - this.state.purchaseRate}`
                                }
                              ]
                            }
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
                                defaultCenterLabel: `${this.state.checkoutRate}%`,
                                paletteColors: "#41B6C4, #000000"
                              },
                              data: [
                                {
                                  label: "active",
                                  value: `${this.state.checkoutRate}`
                                },
                                {
                                  label: "inactive",
                                  alpha: 5,
                                  value: `${100 - this.state.checkoutRate}`
                                }
                              ]
                            }
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
                                defaultCenterLabel: `${
                                  this.state.abandonedRate
                                }%`,
                                paletteColors: "#EDF8B1, #000000"
                              },
                              data: [
                                {
                                  label: "active",
                                  value: `${this.state.abandonedRate}`
                                },
                                {
                                  label: "inactive",
                                  alpha: 5,
                                  value: `${100 - this.state.abandonedRate}`
                                }
                              ]
                            }
                          }}
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container> */}

          {/* row 3 - orders trend */}
          {/* <Container className="row" style={{ minHeight: "400px" }}>
              <Container className="col-md-6 mb-4">
                <Container className="card is-card-dark chart-card">
                  <Container className="chart-container large full-height">
                    <ReactFC
                      {...{
                        type: "bar2d",
                        width: "100%",
                        height: "100%",
                        dataFormat: "json",
                        containerBackgroundOpacity: "0",
                        dataEmptyMessage: "Loading Data...",
                        dataSource: {
                          chart: {
                            theme: "ecommerce",
                            caption: "Orders Trend",
                            subCaption: "By Stores"
                          },
                          data: this.state.ordersTrendStore
                        }
                      }}
                    />
                  </Container>
                </Container>
              </Container>
  
              <Container className="col-md-6 mb-4">
                <Container className="card is-card-dark chart-card">
                  <Container className="chart-container large full-height">
                    <ReactFC
                      {...{
                        type: "usaregion",
                        width: "100%",
                        height: "100%",
                        dataFormat: "json",
                        containerBackgroundOpacity: "0",
                        dataEmptyMessage: "Loading Data...",
                        dataSource: {
                          chart: {
                            theme: "ecommerce",
                            caption: "Orders Trend",
                            subCaption: "By Region"
                          },
                          colorrange: {
                            code: "#F64F4B",
                            minvalue: "0",
                            gradient: "1",
                            color: [
                              {
                                minValue: "10",
                                maxvalue: "25",
                                code: "#EDF8B1"
                              },
                              {
                                minvalue: "25",
                                maxvalue: "50",
                                code: "#18D380"
                              }
                            ]
                          },
                          data: this.state.ordersTrendRegion
                        }
                      }}
                    />
                  </Container>
                </Container>
              </Container>
            </Container> */}
        </Container>
        {/* content area end */}
      </Container>
    );
  }
}

export default SellerMain;
