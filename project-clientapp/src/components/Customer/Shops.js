import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";



import ShopItems from "./shopItems";
import "./style/shops.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: "30px",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",

    borderRadius: theme.shape.borderRadius,

    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: "30px",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Shops = () => {
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [key, setKey] = useState('');

  const handleSelect = (k) => {
    setKey(k);
    console.log(`${key}`);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 const handleClick =(t)=>{
      console.log(t)

 }
  return (
    <div>
       <Navbar bg="primary" expand="sm">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" onSelect={handleSelect}>
      <Nav.Link href="profile">Profile</Nav.Link>
      <Nav.Link href="Aboutus">About us</Nav.Link>
      <NavDropdown title="Category" id="basic-nav-dropdown">
        <NavDropdown.Item><Nav.Link href="#action/3.1">Groceries</Nav.Link></NavDropdown.Item>
        
        <NavDropdown.Item href="#action/3.2">Electronic Devices</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Health & Beauty</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Babies & Toys</NavDropdown.Item>
      </NavDropdown>
      
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



    {/* <ul>
      <li><Link to ="/CustomerItems" >ShopItems</Link></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul> */}
      {/* <div>
        <ul>
          <li>
            <a class="active" href="#home">
              Shops
            </a>
          </li>
          <li>
            <a href="#news">Dashbord</a>
          </li>
          <li>
            <a href="#contact">Store</a>
          </li>
          <li>
            <a href="#about">Product</a>
          </li>
          <li>
            <div lassName={classes.root}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
          </li>
        </ul>
      </div> */}

      <div className="backgroundcolorinshop">
        <Container>
          <div className="">
            <ShopItems />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Shops;
