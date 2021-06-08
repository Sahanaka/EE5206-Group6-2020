import react from 'react';
import { BrowserRouter, Route, Switch, Redirect,Link,useHistory } from "react-router-dom";

import { Container } from "react-bootstrap";



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

console.log("Props New",props)
    return   <div style={{ margin:"15px", borderTopLeftRadius:"9px", padding:"10px" }} className="card">
      <Container>
    
    <div style={{ margin:"5px", borderTopLeftRadius:"9px", padding:"10px" }} className="card-body">

      <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
      <span>Items Price : {props.itemsPrice} </span> <br />
      <span>Tax Price: {props.taxPrice}</span> <br />
      <span>Shipping Price : {props.shippingPrice}</span> <br />
      <span>Total Price : {props.totalPrice}</span> <br />
      <span>Address : {props.customerAddress}</span> <br />
      <button onClick ={()=>{goToNewPage(props)}}> View Products </button>
     
    </div>
    </Container>
  </div>
};
export default Card;