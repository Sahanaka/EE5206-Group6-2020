import React, { Fragment, useEffect, useState,Component} from "react";
import axios from "axios";
import DBApi from '../../Api/DBApi'
import { render } from "fusioncharts";

import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  ButtonGroup,
  Button,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = (theme) => ({
  root: {
    '& .MuiTableCell-head': {
      fontSize: '1.25rem',
      
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
})
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

     return (
       <div  >

        <div>
        <TableContainer>
                <Table>
                  <TableHead className={styles.root} >
                    <TableRow>
                      <TableCell><h1>Customer Name</h1></TableCell>
                      <TableCell><h1>Product  Name</h1></TableCell>
                      <TableCell><h1>Product Price</h1> </TableCell>
                      <TableCell><h1>Quantity</h1></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {props.userList.map((record, index) => { */}
                    { this.state.response.map((record) => {
                      // if (record.userType === 'Seller') {
                        return (
                          <TableRow hover>
                            <TableCell>{record.orderNumber}</TableCell>
                            <TableCell>{record.productName}</TableCell>
                            <TableCell>{record.productPrice}</TableCell>
                            <TableCell>{record.quantity}</TableCell>
                          </TableRow>
                        )
                      //}
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
        </div>
         
      </div>
     
     )}
render(){
  return( <div className="card" >
    

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