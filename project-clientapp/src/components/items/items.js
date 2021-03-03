import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from "./itemGrid";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { getAllProducts } from '../../Actions/seller';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      justify: "center",
    },
  },
}));

const item = [
  {
    ProductId: 1,
    name: "Item_1",
    AvailabeAmount: "AvailabeAmount_1",
    Price: "$20",
    image: "https://www.w3schools.com/images/w3schools_green.jpg",
    Discount: "30%",
  },
  {
    ProductId: 2,
    name: "Item_2",
    AvailabeAmount: "AvailabeAmount_2",
    Price: "$30",
    image: "https://www.w3schools.com/images/w3schools_green.jpg ",
    Discount: "20%",
  },
];

const Items = ({ getAllProducts, products: { products, loading } }) => {
  const classes = useStyles();
  //const [products, setProducts] = useState();
  useEffect(async () => {
    getAllProducts(1);
    //setProducts(res);
  }, [getAllProducts]);
  console.log("pro", products.map(item => console.log(item)))
  return (
    <main>
      <h2 className="">Shop_name</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="filled-basic" label="Search" variant="filled" />
      </form>
      <br />
      <Card spacing={10}>
        {products.map((item) => (
          <Card item key={item.productId} md={20}>
            <Item item={item} />
            <br />
          </Card>
        ))}
      </Card>
    </main>
  );
};

Items.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, { getAllProducts })(Items);
