import react from 'react';
import { BrowserRouter, Route, Switch, Redirect,Link,useHistory } from "react-router-dom";

const Card=(props)=>{
  console.log(props)
  const history = useHistory();
  const goToNewPage=(Name)=>{
      history.push({ 
        pathname: `/OrderList/${Name.title}`, 
        query: {
          title: props.title, 

         }})
  }

    return   <div>
    <img src={props.imageSource} className="card-img-top rounded-circle" />
    <div style={{ color :"white" }} className="card-body">
      <h5 style={{ color :"white",fontWeight: "bold" }}>{props.title}</h5>
     
      <span>items Price : {props.itemsPrice} </span> <br />
      <span>tax Price: {props.taxPrice}</span> <br />
      <span>shippin Price : {props.shippingPrice}</span> <br />
      <span>total Price : {props.totalPrice}</span> <br />
      <span>Address : {props.customerAddress}</span> <br />
    
      {props.isAccepted?( <button  disabled={props.isCustomer}>Cancel Order</button>): 
      <button disabled={props.isCustomer} 
      onClick={()=>props.acceptCastamer(
                                       props.title,
                                       props.cartyId,
                                       props.itemsPrice,
                                       props.taxPrice,
                                       props.shippingPrice,
                                       props.totalPrice,
                                       props.customerAddress
                                       )}
                                       >not accept</button>}
                                     <button onClick ={()=>{goToNewPage(props)}}> View Products </button>
     
    </div>
  </div>
};
export default Card;