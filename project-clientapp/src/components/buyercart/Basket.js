import React from "react";
import Button from "@material-ui/core/Button";
import DBApi from '../../Api/DBApi';
import "./style/basket.css";
import { connect } from 'react-redux';

function Basket(props) {
  var { cartItems, onAdd, onRemove } = props;
  var itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  var taxPrice = itemsPrice * 0.14;
  var shippingPrice = itemsPrice > 2000 ? 0 : 20;
  var totalPrice = itemsPrice + taxPrice + shippingPrice;
  var  orderDetails
  var title
  var price
  var quantity
  var customerEmail
  var customername
  var CustomerAddress
  var isAccepted = false;
  var  addShopItem= async ()=>{
    
    try{
      orderDetails = cartItems.map((item)=>(
        { productName:item.title,
          quantity:item.quantity,
          productPrice:item.price,
          
        }
      ))
      
      itemsPrice = await itemsPrice.toString();
      taxPrice = await taxPrice.toString();
      shippingPrice = await shippingPrice.toString();
      totalPrice =await totalPrice.toString();
      
      isAccepted= true;
     
      customerEmail= props.state.email;
      cartItems = props.state.name;
      CustomerAddress = props.state.address;
      console.log("Customer Name",props.state.name)
      
   const response = await DBApi.post("/cart",{cartModel:{cartItems,itemsPrice,taxPrice,shippingPrice,totalPrice, isAccepted,customerEmail,CustomerAddress},orderDetails})
if(response.status==200){
  
    alert("Order Placed. Thank You")
   
    console.log("Succ");
    }else{
      throw Error(response.status);
    }
    }catch(e){
      console.log(e)
    }

  }
  return (
    <aside className="block ">
      <h2 className="text-center ">My Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="">
            <div className="text-left">{item.title}</div>

            <div className="text-right">
              {item.qty} x Rs{item.price.toFixed(2)}
            </div>
            <div className="center">
              <Button className="but123 add" onClick={() => onRemove(item)}>
                <i class="fas fa-trash"></i>
              </Button>
              <Button className="but123 remove" onClick={() => onAdd(item)}>
                <i class="fas fa-cart-plus"></i>
              </Button>
            </div>
            <hr />
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="">
              <div className="text-left">Items Price</div>
              <div className="text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="">
              <div className="text-left">Tax Price</div>
              <div className=" text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="">
              <div className="text-left">Shipping Price</div>
              <div className=" text-right">${shippingPrice.toFixed(2)}</div>
            </div>

            <div className="">
              <hr />
              <div className="text-left">
                <strong>Total Price</strong>
              </div>
              <div className=" text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="">
              <button onClick={()=>addShopItem()}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}


const mapStateToProps = initialState =>{
  return {state:initialState.auth.user}
}

 export default connect(mapStateToProps)(Basket);