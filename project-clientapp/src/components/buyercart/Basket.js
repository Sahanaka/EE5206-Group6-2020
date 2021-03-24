import React from "react";
import Button from "@material-ui/core/Button";
import "./style/basket.css";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
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
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
