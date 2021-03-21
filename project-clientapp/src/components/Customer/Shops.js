import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import ava from "../../img/psn1.jpg";
import FilterCategory from "./category";
import ShopItems from './shopItems';

const Shops = () => {
    return (
        <div className="App">
          <Grid>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Avatar className="cent" alt="Remy Sharp" src={ava} />
              <Box>Hi User</Box>
            </Box>
          </Grid>
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
                        <Link to="/itemlist">Products</Link>
                    </li>
                  </ul>
                </nav>
          <Container maxWidth="lg">
            <Typography variant="h4">Store</Typography>
            <div className="container-fluid mb-3">
              <div className="row">
                <div className="col-md-3">
                  <FilterCategory />
                  {/* <CardServices123 /> */}
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-4">
                  <span className="align-middle "></span>
                </div>
                <div className="card-list">
                  <div className="container">
                    <h1 className="page-title">Shops</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-mb-20 container">
              <ShopItems />
            </div>
          </Container>
        </div>
      );
}

export default Shops;
