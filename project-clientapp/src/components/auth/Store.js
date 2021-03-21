import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
// import { data } from "/Projects/New folder (6)/EE5206-Group6-2020/project-clientapp/src/components/data/data";
import Products1 from "./product/products";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Container from "@material-ui/core/Container";
import "./style/store.css";
//import FilterCategory from "./category";

import { getShops } from "../../Actions/customer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Store = () => {
  const classes = useStyles();
  return (
    <div>
      <div class="w3-bar w3-light-grey">
        <a href="index.html" class="w3-bar-item w3-button">
          Dashboard
        </a>
        <a href="#ui-basic" class="w3-bar-item w3-button">
          My Profile
        </a>
        <a href="#" class="w3-bar-item w3-button">
          Store
        </a>
        <a href="/itemlist" class="w3-bar-item w3-button">
          Shops
        </a>
      </div>

      {/* <nav className="sidebar sidebar-offcanvas" id="sidebar">
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
                  <a className="nav-link" href="pages/ui-features/buttons.html">
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
      </nav> */}

      <div className="background">
        <div className="float-left">
          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
          >
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>

        <div className="float-right">
          <div className="grid-container">
            <Products1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
