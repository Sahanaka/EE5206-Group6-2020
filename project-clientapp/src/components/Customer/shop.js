import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getShopById, getShopProducts } from "../../Actions/customer";

const Shop = ({ getShopById, shop: { shop, shopLoading }, getShopProducts, products: { products, productLoading }, match }) => {
  useEffect(async () => {
    getShopById(match.params.id);
    getShopProducts(match.params.id);
  }, [getShopById, getShopProducts, match.params.id]);
  console.log("cus", shop)
  console.log('pro', products)
  return( <Fragment>
    {shopLoading && productLoading ? (
      <div>Loading Please wait!</div>
    ) : (
        <div>Hello {match.params.id}</div>
    )}
   
  </Fragment>
    
  ) 
};

Shop.propTypes = {
  getShopById: PropTypes.func.isRequired,
  getShopProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shop: state.customer,
  products: state.products
});

export default connect(mapStateToProps, { getShopById, getShopProducts })(Shop);
