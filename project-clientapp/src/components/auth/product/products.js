import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Product from "./product";

import { getShops } from "../../../Actions/customer";
import Spinner from '../../layout/Spinner';

const Products = ({ getShops, shops: { shops, loading } }) => {
  useEffect(async () => {
    getShops();
  }, [getShops]);
  
  return (
    <Fragment>
      {loading ? (
       <Spinner />
      ) : (
        <Fragment>
          <br />
          <Grid conrtainer justify="center" spacing={4}>
            {shops.map((product) => (
              <Grid item key={product.id} md={4}>
                <Product product={product} />
                <br />
              </Grid>
            ))}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

Products.propTypes = {
  getShops: PropTypes.func.isRequired,
  shops: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shops: state.seller,
});

export default connect(mapStateToProps, { getShops })(Products);
