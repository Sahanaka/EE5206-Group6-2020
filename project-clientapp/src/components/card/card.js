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
        
      >
        <i className="far fa-trash-alt"></i>
      </button>
      {props.isAccepted?( <button disabled={props.isCustomer}>accept</button>): 
      <button disabled={props.isCustomer} 
      onClick={()=>props.acceptCastamer(
                                       props.title,
                                       props.cartyId,
                                       props.itemsPrice,
                                       props.taxPrice,
                                       props.shippingPrice,
                                       props.totalPrice
                                       )}
                                       >not accept</button>}
     
    </div>
  </div>
};
export default Card;