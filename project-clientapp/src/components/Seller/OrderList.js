import React, { Fragment, useEffect, useState,Component} from "react";
import axios from "axios";
import DBApi from '../../Api/DBApi'
import { render } from "fusioncharts";
import Paper from '@material-ui/core/Paper';

class OrderList extends Component{

 
  constructor(props) {
    super(props);
    this.state = {
      response:null
    };
    this.getUser = this.getUser.bind(this);
    this.renderItem = this.renderItem.bind(this);
   
  }
  componentDidMount(){
    this.getUser();
  }

  async getUser(){
   const value= await axios.get("https://localhost:5001/api/Seller/cartItems/items");
   const newarray = await value.data.filter(v=>v.orderNumber==this.props.history.location.query.title)
   await this.setState({response:newarray})

  }
  renderItem(){

     return this.state.response.map((r)=>{
      return <div >

        <Paper   elevation={3}>


        </Paper>
         <table>
         <tbody>
         <div className="card-body" >
         <Paper   elevation={3}>
                  <h4> Customer Name :  {r.orderNumber}</h4>
                 <p> product Name : {r.productName}</p>
                 <p> product Price :  {r.productPrice}.00 LKR</p>
                 <p> product quantity : {r.quantity}</p>
                 </Paper>
         </div>
          </tbody>
         </table>
      </div>
     })
  }
render(){
  return( <div className="card">
    

         {!this.state.response?<h1>server loding</h1>: 
           <div style={{ justifyContent: 'center'}} > 
            <h1 style={{color: "red",display: 'flex', justifyContent: 'center'}} >Order Items</h1> 
           {this.renderItem()}
           </div>
         }
         
   </div>)
}
}
export default OrderList;