import React, { Component } from "react";
import "./style/landing.css";
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Carousel from 'react-bootstrap/Carousel'
import image1 from './image/img_1.png'
import image2 from './image/img_2.png'
import image3 from './image/img_3.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width:200,
    maxWidth: 200,
    margin:4,
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Landing = () => {
  const classes = useStyles();
  let history = useHistory();

  const redirect = () => {
    history.push("/Mainregistration");
    history.push("/login");
  };
  
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
      
    
      <section className="landing">
        {/* <div>
    <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
<li className="cartfuntion"> 
<IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
</li>
 

</ul>



    </div> */}

    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3> */}
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3> */}
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="background12">
<div className="landing-inner">
    
           <h1 className="x-large textnew text5">
            Sri Lanka's Largest Online Web Market
          </h1> 
           <div className="widthofbutton textnew ">
            <Button
              onClick={() => {
                history.push("/Mainregistration");
              }}
              variant="contained"
              color="primary"
              className={classes.button}
              // startIcon={<ReceiptIcon />}
            >
              Register
            </Button>
            <Button
              onClick={() => {
                history.push("/login");
              }}
              variant="contained"
              color="primary"
              className={classes.button}
              // startIcon={<ReceiptIcon />}
            >
              Login
            </Button>
          </div> 
  
           <p className="lead"></p> 
  
  
        </div>

</div>

        
      </section>
    );
  };
    
  
  

export default Landing;
