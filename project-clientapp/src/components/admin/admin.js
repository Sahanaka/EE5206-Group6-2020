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


ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;



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
   
    return (
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
          <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css" />
         

         
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
                      <a className="nav-link" href="./Sellerlist">
                        <i className="ti-shield menu-icon" />
                        <span className="menu-title">Sellers</span>
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
                        <span className="menu-title">Customers</span>
                        <i className="menu-arrow" />
                      </a>

                      
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
                    
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1"></span>
                  {this.state.etRevenue}
                </Container>
              </Container>
            </Container>
          </Container>

         
        </Container>
        
      </Container>
    );
  }
}

export default SellerMain;
