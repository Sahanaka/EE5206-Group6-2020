import React, { lazy, Component } from "react";
// import { data } from "/Projects/New folder (6)/EE5206-Group6-2020/project-clientapp/src/components/data/data";
import Products1 from "./product/products";
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
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import Background from "./img/mainimg.JPG";
import Image1 from "./img/mkt1.jpeg";
import Img2 from "./img/psn1.jpg";
import Image2 from "./img/mkt2.jpg";
import Image3 from "./img/mkt3.jpg";
import Image4 from "./img/mkt4.jpg";
import ava from "./img/psn1.jpg";
import Drawer from "./Drawer";
import FilterCategory from "./category";
import CardServices from "./CardServices";
import Paging from "../../components/paging";

import Paper from "@material-ui/core/Paper";

import ButtonBase from "@material-ui/core/ButtonBase";

const Store = () => {
  return (
    <div>
      <div className="App">
        <Grid>
          <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
            <Avatar className="cent" alt="Remy Sharp" src={ava} />
            <Box>Hi User</Box>
          </Box>
        </Grid>
        <Container maxWidth="lg">
          <Typography variant="h4">Store</Typography>
          <div className="container-fluid mb-3">
            <div className="row">
              <div className="col-md-3">
                <FilterCategory />
                {/* <CardServices /> */}
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-4">
                <span className="align-middle "></span>
              </div>
              <div className="card-list">
                <div className="container">
                  <h1 className="page-title">Shops</h1>
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-mb-20 container">
            <Products1 />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Store;
