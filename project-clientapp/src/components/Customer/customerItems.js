
import React, { Fragment, useEffect, useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getShopById, getShopProducts } from "../../Actions/customer";
import Spinner from "../layout/Spinner";
import Basket from "../buyercart/Basket";
import "../Customer/style/shop.css";
import Card from '../card/card';
import DBApi from '../../Api/DBApi'
import { TruckFlatbed } from "react-bootstrap-icons";


const CustomerItems = ({
    getShopById,
    shop: { shop, shopLoading },
    getShopProducts,
    products: { products, productLoading },
    match,
  }) => {
    const [response, setResponse] = useState(null);
    useEffect(async () => {
      getShopById(match.params.id);
      try{
        getShopProducts(match.params.id);
        const responses = await DBApi.get("/cart")
      if(responses.status==200){
      console.log(responses.data)
      setResponse(responses.data)
      }else{
        throw Error(responses.status);
      }
      }catch(e){
        console.log("error")
      }
    }, [match.params.id]);
    //console.log("cus", shop);
   // console.log("pro", products);
  // console.log(match)
    const imageCard = (data) => (
 
      <div>
        <img src={data.imageSource} className="card-img-top rounded-circle" />
        <div className="card-body">
          <h5 style={{ fontWeight: "bold" }}>{data.title}</h5>
          <span>LKR : {data.price}.00/=</span> <br />
          <span>Quantity : {data.quantity} </span> <br />
          <span>Availabe Amount : {data.availabeAmount}</span> <br />
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
  const addCardItems= ()=>{
    return response.map((r)=>{
      console.log(r)
     return <Card 
     isAccepted={r.isAccepted}
     title={r.cartItems}
     cartyId={r.cartyId}
     itemsPrice={r.itemsPrice}
     taxPrice = {r.taxPrice}
     shippingPrice={r.shippingPrice}
     totalPrice = {r.totalPrice}
     isCustomer = {true}
     />
     })
  }
    return (
      <Fragment>
              <div>
                {response?(addCardItems()):<div>loading ....</div>}
              </div>
      </Fragment>
    );
  };
  
  CustomerItems.propTypes = {
    getShopById: PropTypes.func.isRequired,
    getShopProducts: PropTypes.func.isRequired,
    shop: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    shop: state.customer,
    products: state.products,
  });
  
  export default connect(mapStateToProps, { getShopById, getShopProducts })(CustomerItems);
  