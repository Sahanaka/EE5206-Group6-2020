import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconBotton,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h3" gutterBottom>
            {product.name}
          </Typography>
          <br />
          <Typography variant="5" gutterBottom>
            {product.Address}
          </Typography>
        </div>
        <Typography variant="h6" color="textSecondary">
          {product.Category}
        </Typography>
      </CardContent>

      <Button className="container" color="secondary">
        <Link to="/Items">Select</Link>
      </Button>

      {/* <CardActions disableSpacing className={classes.CardActions}>
        <IconBotton area-label="Add to Cart">
          <AddShoppingCart />
        </IconBotton>
      </CardActions> */}
    </Card>
  );
};

export default product;
