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

        {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add New Address" />
        </ListItem> */}
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

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
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
          {/* <p className="">
          <i className="fas fa-user" /> Create Your Account
        </p> */}
          <form className="form " >
            <div className="">
              {/* <small className=""> Name</small> */}
              <input
                type="text"
                placeholder="Card Holder"
                name="Card Holder"
                // value={name}
                
              />
            </div>
            <div className="">
              {/* <small className=""> Address</small> */}
              <input
                type="text"
                placeholder="Card Number"
                name="Card Number"
                // value={address}
                
              />
              <small className=""></small>
            </div>
            <div className="">
              {/* <small className=""> Email</small> */}
              <input
                type="text"
                placeholder="Expires"
                name="Expires"
                // value={email}
                
              />
              <small className=""></small>
            </div>
            
            <div className="">
              {/* <small className="">Password</small> */}
              <input
                type="text"
                placeholder="CVV"
                name="CVV"
                // value={rePassword}
                
              />
            </div>
            <div className="">
              {/* <small className=""> Contact Number</small> */}
              <input
                type="text"
                placeholder="Contact Number"
                name="contactNo"
                // value={contactNo}
                
              />
            </div>

            <div className="">
              {/* <small className=""> Category</small> */}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                // value={email}
                
              />
              <small className=""></small>
            </div >
            <div>
            <Button variant="outlined" color="secondry" onClick={handleClickOpen}>
        Continue
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />


            </div>

            {/* <input  type="submit" className="btn btn-primary" value="Continue" /> */}
            
          </form>
          {/* <p className="color78">
            Already have an account? <Link to="/login">Sign In</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Buy;