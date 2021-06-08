import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getShopById, getShopProducts } from "../../Actions/customer";
import Spinner from "../layout/Spinner";
import Basket from "../buyercart/Basket";
import "./style/shop.css";

const Shop = ({
  getShopById,
  shop: { shop, shopLoading },
  getShopProducts,
  products: { products, productLoading },
  match,
}) => {
  useEffect(async () => {
    getShopById(match.params.id);
    getShopProducts(match.params.id);
  }, [match.params.id]);
  //console.log("cus", shop);
  //console.log("pro", products);

  const imageCard = (data) => (
    <div>
      <img src={data.imageSource} style ={{borderRadius:"15px"}} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5 style={{ fontWeight: "bold" }}>{data.title}</h5>
        <span>LKR : {data.price}.00/=</span> <br />
        <span>Size : {data.size}</span> <br />
        <span>Discount : {data.discount}</span> <br />
        <button
          className="btn btn-light"
          Add
          to
          Cart
          onClick={() => onAdd(data)}
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.productId !== product.productId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };


  return (
    <Fragment>
      {shopLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          {products.length == 0 ? (
            <h1>WE WILL SOON ADD PRODUTS. PLEASE CHECK LATER</h1>
          ) : (
            <div className="row">
              <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                  <div className="container text-center">
                    <h1 className="display-4">{shop.name}</h1>
                    <h3 className="display-5">{shop.address}</h3>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <table>
                  <tbody className="block1">
                    {
                      //tr > 4 td
                      [...Array(Math.ceil(products.length / 4))].map((e, i) => (
                        <tr key={i}>
                          <td>{imageCard(products[4 * i])}</td>
                          <td>
                            {products[4 * i + 1]
                              ? imageCard(products[4 * i + 1])
                              : null}
                          </td>
                          <td>
                            {products[4 * i + 2]
                              ? imageCard(products[4 * i + 2])
                              : null}
                          </td>
                          <td>
                            {products[4 * i + 3]
                              ? imageCard(products[4 * i + 3])
                              : null}
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>

              <div className=" sidebar colm-1 withe">
                <Basket
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  seller={shop.name}
                ></Basket>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Shop.propTypes = {
  getShopById: PropTypes.func.isRequired,
  getShopProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shop: state.customer,
  products: state.products,
});

export default connect(mapStateToProps, { getShopById, getShopProducts })(Shop);
