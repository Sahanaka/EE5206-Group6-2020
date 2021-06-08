import React, { Component } from "react";
import { Container, Nav } from "./SellerMainitems/styled-components";
import { Link } from "react-router-dom";
import "./Style/SellerMainstyle.css"







import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "./SellerMainitems/charts-theme";

import config from "./SellerMainitems/config";
import Dropdown from "react-dropdown";
import formatNum from "./SellerMainitems/format-number";

// import UserImg from "../assets/images/user-img-placeholder.jpeg";

ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;






//const SellerMain = ({ match }) => {

  


  class SellerMain extends Component {
    constructor(props) {
      super();
      this.state = {
        items: [],
        dropdownOptions: [],
        selectedValue: null,
        amRevenue: null,
        ebRevenue: null,
        etRevenue: null,
        totalRevenue: null,
        productViews: null,
        purchaseRate: " ",
        checkoutRate: " ",
        abandonedRate: " ",
        ordersTrendStore: [],
        total: null,
        auth : null
      };
    }
  
    getData = arg => {
      // google sheets data
      const arr = this.state.items;
      const arrLen = arr.length;


      
  
      // kpi's
      // amazon revenue
      let amRevenue = 0;
      //ebay revenue
      let ebRevenue = 0;
      // etsy revenue
      let etRevenue = 0;
      // total revenue
      let totalRevenue = 0;
      // product views
      let productViews = 0;
      // purchase rate
      let purchaseRate = 0;
      // checkout rate
      let checkoutRate = 0;
      // abandoned rate
      let abandonedRate = 0;
      // order trend by brand
      let ordersTrendStore = [];
      // order trend by region
      let ordersTrendRegion = [];
      let orderesTrendnw = 0;
      let orderesTrendsw = 0;
      let orderesTrendc = 0;
      let orderesTrendne = 0;
      let orderesTrendse = 0;
  
      let selectedValue = null;
  
      for (let i = 0; i < arrLen; i++) {
        if (arg === arr[i]["month"]) {
          if (arr[i]["source"] === "AM") {
            amRevenue += parseInt(arr[i].revenue);
            ordersTrendStore.push({
              label: "Amazon",
              value: arr[i].orders,
              displayValue: `${arr[i].orders} orders`
            });
          } else if (arr[i]["source"] === "EB") {
            ebRevenue += parseInt(arr[i].revenue);
            ordersTrendStore.push({
              label: "Ebay",
              value: arr[i].orders,
              displayValue: `${arr[i].orders} orders`
            });
          } else if (arr[i]["source"] === "ET") {
            etRevenue += parseInt(arr[i].revenue);
            ordersTrendStore.push({
              label: "Etsy",
              value: arr[i].orders,
              displayValue: `${arr[i].orders} orders`
            });
          }
          productViews += parseInt(arr[i].product_views);
          purchaseRate += parseInt(arr[i].purchase_rate / 3);
          checkoutRate += parseInt(arr[i].checkout_rate / 3);
          abandonedRate += parseInt(arr[i].abandoned_rate / 3);
          orderesTrendnw += parseInt(arr[i].orders_nw);
          orderesTrendsw += parseInt(arr[i].orders_sw);
          orderesTrendc += parseInt(arr[i].orders_c);
          orderesTrendne += parseInt(arr[i].orders_ne);
          orderesTrendse += parseInt(arr[i].orders_se);
        }
      }
  
      totalRevenue = amRevenue + ebRevenue + etRevenue;
      
      this.state.totalRevenue = 100000

      ordersTrendRegion.push({
        id: "01",
        value: orderesTrendne
      }, {
        id: "02",
        value: orderesTrendnw
      }, {
        id: "03",
        value: orderesTrendse
      }, {
        id: "04",
        value: orderesTrendsw
      }, {
        id: "05",
        value: orderesTrendc
      });
  
      selectedValue = arg;
  
      // setting state
      this.setState({
        
        amRevenue: formatNum(amRevenue),
        ebRevenue: formatNum(ebRevenue),
        etRevenue: formatNum(etRevenue),
        totalRevenue: formatNum(totalRevenue),
        productViews: formatNum(productViews),
        purchaseRate: purchaseRate,
        checkoutRate: checkoutRate,
        abandonedRate: abandonedRate,
        ordersTrendStore: ordersTrendStore,
        ordersTrendRegion: ordersTrendRegion,
        selectedValue: selectedValue,
        total: 1000,
        auth : this.auth
      });
    };
   
    updateDashboard = event => {
    
      this.getData(event.value);
      this.setState({ selectedValue: event.value });
    };
  
    // componentDidMount() {
    //   fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //       let batchRowValues = data.valueRanges[0].values;
  
    //       const rows = [];
    //       for (let i = 1; i < batchRowValues.length; i++) {
    //         let rowObject = {};
    //         for (let j = 0; j < batchRowValues[i].length; j++) {
    //           rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
    //         }
    //         rows.push(rowObject);
    //       }
  
    //       // dropdown options
    //       let dropdownOptions = [];
  
    //       for (let i = 0; i < rows.length; i++) {
    //         dropdownOptions.push(rows[i].month);
    //       }
  
    //       dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
  
    //       this.setState(
    //         {
    //           items: rows,
    //           dropdownOptions: dropdownOptions,
    //           selectedValue: "Jan 2019"
    //         },
    //         () => this.getData("Jan 2019")
    //       );
    //     });
    // }

    
  
    render() {

      
      
      
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
      <link rel="stylesheet" href="vendors/ti-icons/css/themify-icons.css" />
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
                      Total Revenue
                    </Container>
                  </Container>
  
                  <Container className="card-value pt-4 text-x-large">
                    <span className="text-large pr-1">Rs</span>
                  {this.total}
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
                      Complete Orders
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
  
            {/* row 2 - conversion */}
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
            </Container>
  
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
