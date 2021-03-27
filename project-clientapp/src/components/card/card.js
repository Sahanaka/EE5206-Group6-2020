import react from 'react';

const Card=(props)=>{
    return   <div>
    <img src={props.imageSource} className="card-img-top rounded-circle" />
    <div className="card-body">
      <h5 style={{ fontWeight: "bold" }}>{props.title}</h5>
      <span>carty Id : {props.cartyId}</span> <br />
      <span>items Price : {props.itemsPrice} </span> <br />
      <span>tax Price: {props.taxPrice}</span> <br />
      <span>shippin Price : {props.shippingPrice}</span> <br />
      <span>total Price : {props.totalPrice}</span> <br />
      <button
        className="btn btn-light delete-button"
        onClick={console.log("clicked")}
      >
        <i className="far fa-trash-alt"></i>
      </button>
      <button>accept</button>
    </div>
  </div>
};
export default Card;