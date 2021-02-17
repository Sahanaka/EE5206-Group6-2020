import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import './style1.css'

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import Image1 from "./images/mkt5.jpeg";
import Image2 from "./images/map.jpg";
import Img2 from "./images/psn2.jpg";
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  appBar2: {
    backgroundColor: "#fff",
  },
 
  blogsContainer2: {
    paddingTop: theme.spacing(3),
  },
  blogTitle2: {
    fontWeight: 800,
    paddingBottom: theme.spacing(5),
  },
  card2: {
    maxWidth: "100%",
  },
  media2: {
    height: 240,
  },
  cardActions2: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author2: {
    display: "flex",
  },
  paginationContainer2: {
    display: "flex",
    justifyContent: "center",
  },
  root2: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function OrderAccept() {
  const classes = useStyles();

  

  
      return(
    <div className="back1">
      
      <Container maxWidth="lg" className={classes.blogsContainer2}>
        <Typography variant="h4" className={classes.blogTitle2}>
        <div className="ABC" >ABC Store</div>
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardMedia
                  className={classes.media2}
                  image={Image1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ABC Store
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions2}>
                <Box className={classes.author2}>
                  <Avatar src={Img2.jpg} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Jan 3, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card2}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                  Order 01 Details
                  </Typography>
                 
                  <Typography>
                  <ListGroup>
                     <ListGroup.Item>
                       <h5>Costomer Name</h5><p>Name</p>
                     </ListGroup.Item>
                     <ListGroup.Item>
                       <h5>Address</h5><p>Addres</p>
                     </ListGroup.Item>
                     <ListGroup.Item>
                       <h5>Order List</h5><p>List</p>
                     </ListGroup.Item>
                     <ListGroup.Item>
                       <h5>Email Address</h5><p>Email</p>
                     </ListGroup.Item>
                     <ListGroup.Item>
                       <h5>Payment Method</h5><p>Payment method</p>
                     </ListGroup.Item>
                  </ListGroup>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card2}>
              <CardActionArea>
                
                <CardContent>
                <Box ml={2}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Date
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Jan 3, 2021
                    </Typography>
                  </Box>
                  <Box ml={2}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Location
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      <CardMedia
                  className={classes.media2}
                  image={Image2}
                  title="Contemplative Reptile"
                     />
                    </Typography>
                  
                  <ListGroup>
                  <ListGroup.Item>
                    <Button variant="contained" color="primary">
                      ORDER ACCEPT
                    </Button>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <Button variant="contained" color="primary">
                      Order CANCEL
                    </Button>
                  </ListGroup.Item>
                  </ListGroup>
                  </Box>

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
       
      </Container>
    </div>
    );
    }
  

  export default OrderAccept;


         