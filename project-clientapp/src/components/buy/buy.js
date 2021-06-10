import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../buy/buystyle.css";


import { setAlert } from "../../Actions/alert";
import { registerCustomer } from "../../Actions/auth";
import "w3-css/w3.css";


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom'


const emails = ['Direct', 'Card'];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});


export function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Payment Method</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText color="secondary" primary={email} />
          </ListItem>
        ))}
     
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Buy =() =>{
  let history = useHistory()

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    alert("Are You Sure ??")
    history.push({pathname: '/Popup'});

    console.log ("Need to redicrect Success Page")
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  
  return (
    <div className="backgroundbuy ">
      <div className=" w3-container bo78   squrebuy">
        <h1 className="large text-primary textcenter78">Payment Methods</h1>
        <div className="itemcenter78">
          
          <form className="form " >
            <div className="">
             
              <input
                type="text"
                placeholder="Card Holder"
                name="Card Holder"
 
              />
            </div>
            <div className="">
             
              <input
                type="text"
                placeholder="Card Number"
                name="Card Number"
                
              />
              <small className=""></small>
            </div>
            <div className="">
              
              <input
                type="text"
                placeholder="Expires"
                name="Expires"
                
              />
              <small className=""></small>
            </div>
            
            <div className="">
              
              <input
                type="text"
                placeholder="CVV"
                name="CVV"
               
              />
            </div>
            <div className="">
              
              <input
                type="text"
                placeholder="Contact Number"
                name="contactNo"
                
              />
            </div>

            <div className="">
              
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                
              />
              <small className=""></small>
            </div >
            <div>
            <Button variant="outlined" color="secondry" onClick={handleClickOpen}>
        Continue
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Buy;