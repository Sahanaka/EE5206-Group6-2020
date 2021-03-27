import React from "react";
import Button from "@material-ui/core/Button";
import DBApi from '../../Api/DBApi';
import "./style/basket.css";

export default function Basket(props) {
  var { cartItems, onAdd, onRemove } = props;
  var itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  var taxPrice = itemsPrice * 0.14;
  var shippingPrice = itemsPrice > 2000 ? 0 : 20;
  var totalPrice = itemsPrice + taxPrice + shippingPrice;
  var  addShopItem= async ()=>{
    try{
      cartItems =await cartItems[0].title.toString();
      itemsPrice = await itemsPrice.toString();
      taxPrice = await taxPrice.toString();
      shippingPrice = await shippingPrice.toString();
      totalPrice =await totalPrice.toString();
    const response = await DBApi.post("/cart",{cartItems,itemsPrice,taxPrice,shippingPrice,totalPrice})
    if(response.status==200){
    console.log(response.data)
    }else{
      throw Error(response.status);
    }
    }catch(e){
      console.log("error")
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
              <Button
                className="button add myButton"
                onClick={() => onRemove(item)}
              >
                <i class="fas fa-trash"></i>
              </Button>
              <Button
                className="button remove myButton"
                onClick={() => onAdd(item)}
              >
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
