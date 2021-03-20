import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import "./style/product.css";

import Product from "./product";

import { getShops } from "../../../Actions/customer";

const Products = ({ getShops, shops: { shops, loading } }) => {
  useEffect(async () => {
    getShops();
  }, [getShops]);

  return (
    <Fragment>
      {loading ? (
        <div></div>
      ) : (
        <div>
          <br />
          <Grid className="grid-container">
            {shops.map((product) => (
              <Grid item key={product.id} md={15}>
                <Product product={product} />
                <br />
              </Grid>
            ))}
          </Grid>
        </div>
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
