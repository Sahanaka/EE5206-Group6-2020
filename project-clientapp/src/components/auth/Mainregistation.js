import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Mainregister.css";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Divider } from "@material-ui/core";
import { Domain } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Mainregistation = () => {
  const classes = useStyles();
  let history = useHistory();

  const redirect = () => {
    history.push("/Register");
  };
  return (
    // <div className="box-a">
    //   <h1 className="Main ">Register</h1>
    //   <div className="grid-container">
    //     <div className="container vertical-center ">
    //       <Button href="/Register" variant="contained" color="primary">
    //         Buyer
    //       </Button>
    //     </div>

    //     <div className="container vertical-center ">
    //       <Button href="/SellerRegistation" variant="contained" color="primary">
    //         Seller
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    <div className="body">
      <div className="txt">
        <div class="sp-container ">
          <div class="sp-content">
            <div class="sp-globe"></div>
            {/* <h2 class="frame-1">You can Register as</h2>
            <h2 class="frame-2">Buyer or seller</h2> */}
            {/* <h2 class="frame-3">REGISTERS</h2>
            <h2 class="frame-4">AS</h2> */}
            {/* <h2 class="frame-5">
              <span>BUYER OR SELLER</span>
            </h2> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" box-a ">
          <h1 className="Main ">REGISTERS</h1>

          <div className="row">
            <button
              onClick={() => {
                history.push("/Register");
              }}
              type="submit"
              class="btn btn-primary btn-block btn-large"
            >
              Buyer
            </button>

            <button onClick=
              {() => {
                history.push("/Register");
              }}
              type="submit" class="btn btn-primary btn-block btn-large" 
              > Seller
            </button>

            {/* <div>
          <Button href="/Register" variant="contained" color="primary">
            Seller
          </Button>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainregistation;
