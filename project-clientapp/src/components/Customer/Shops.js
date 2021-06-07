import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Navbar from 'react-bootstrap/Navbar'
import * as ReactBoostStrap from "react-bootstrap";



import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';






import ShopItems from "./shopItems";
import "./style/shops.css";

const drawerWidth = 150;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  
  drawerPaper: {
    width: drawerWidth,
    top:'43px',
     position:'inherit',
    height:'595px',
    
    backgroundColor:{
      opacity:'0.1',
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

  
 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//  const handleClick =(t)=>{
//       console.log(t)

//  }

 const drawer = (
  <div>
     <div className={classes.toolbar} /> 
     <Divider />
      <h1 className='sidebartextakign'>Categories</h1>
    <List component="div" variant="body1">
      {['Groceries', 'Whole Sale', 'Electronics', 'Bakeries', "Food"].map((text, index) => (
        <ListItem button key={text}>
          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
          
          <ListItemText  primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List component="div" variant="body1">
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
           <Box color="text.primary"><ListItemText primary={text} /></Box>
          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
          
        </ListItem>
      ))}
    </List>
  </div>
);

const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
       








  <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
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


      <ReactBoostStrap.Navbar bg="primary" expand="sm">
  {/* <ReactBoostStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBoostStrap.Navbar.Brand> */}
  <ReactBoostStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBoostStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBoostStrap.Nav className="mr-auto">
      <ReactBoostStrap.Nav.Link href="#home">Profile</ReactBoostStrap.Nav.Link>
      <ReactBoostStrap.Nav.Link href="#link">About us</ReactBoostStrap.Nav.Link>
      <ReactBoostStrap.NavDropdown title="Category" id="basic-nav-dropdown">
        <ReactBoostStrap.NavDropdown.Item href="#action/3.1">Groceries</ReactBoostStrap.NavDropdown.Item>
        <ReactBoostStrap.NavDropdown.Item href="#action/3.2">Electronic Devices</ReactBoostStrap.NavDropdown.Item>
        <ReactBoostStrap.NavDropdown.Item href="#action/3.3">Health & Beauty</ReactBoostStrap.NavDropdown.Item>
        <ReactBoostStrap.NavDropdown.Divider />
        <ReactBoostStrap.NavDropdown.Item href="#action/3.4">Babies & Toys</ReactBoostStrap.NavDropdown.Item>
      </ReactBoostStrap.NavDropdown>
      
    </ReactBoostStrap.Nav>
   
  </ReactBoostStrap.Navbar.Collapse>

  <ReactBoostStrap.Form className="d-flex">
      <ReactBoostStrap.FormControl
        type="search"
        placeholder="Search"
        className="mr-3"
        aria-label="Search"
      />
      <ReactBoostStrap.Button variant="outline-success">Search</ReactBoostStrap.Button>
    </ReactBoostStrap.Form>
  
</ReactBoostStrap.Navbar>

        <div className={classes.toolbar} />

     



        <div className="backgroundcolorinshop">
        <Container>
          <div className="">
            <ShopItems />
          </div>
        </Container>
      </div>
      </main>
    </div>



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

      
    </div>
  );
};

export default Shops;
