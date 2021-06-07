import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Box from "@material-ui/core/Box";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import ShopItems from "./shopItems";
import "./style/shops.css";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    top: "43px",
    position: "inherit",
    height: "595px",

    backgroundColor: {
      opacity: "0.1",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Shops = (props) => {
  const { window } = props;
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [key, setKey] = useState("");

  const handleSelect = (k) => {
    setKey(k);
    console.log(`${key}`);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (t) => {
    console.log(t);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    //console.log(selectedIndex);
    if (index === 0) setSelectedCategory("");
    if (index === 1) setSelectedCategory("Groceries");
    if (index === 2) setSelectedCategory("WholeSale");
    if (index === 3) setSelectedCategory("Electronics");
    if (index === 4) setSelectedCategory("Bakeries");
    if (index === 5) setSelectedCategory("Vegetable & Fruits");

    //console.log(selectedIndex);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <h1 className="sidebartextakign">Categories</h1>
      <List component="div" variant="body1">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="All" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Groceries" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Whole Sale" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Electronics" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="Bakeries" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText primary="Vegetable & Fruits" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <div>
        <CssBaseline />

        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}{" "}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <Navbar bg="primary" expand="sm">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" onSelect={handleSelect}>
                <Nav.Link href="profile">Profile</Nav.Link>
                <Nav.Link href="Aboutus">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-3"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar>
          <div className={classes.toolbar} />
          <div className="backgroundcolorinshop">
            <Container>
              <div className="">
                <ShopItems filterCategory={selectedCategory}/>
              </div>
            </Container>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shops;
