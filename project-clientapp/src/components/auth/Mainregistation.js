import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./style/Mainregister.css";
import { makeStyles } from "@material-ui/core/styles";

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
    history.push("/SellerRegistration");
  };
  return (
    
    <div className="body_mainregister">
      <div className="txt_mainregister">
        <div class="sp-container ">
          <div class="sp-content">
            <div class="sp-globe"></div>
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" box-a_main ">
          <hr/>
          <h1 className="Main textalign">Choose Who You are</h1>

          <div className="row_main">
            <button
              onClick={() => {
                history.push("/Register");
              }}
              type="submit"
              class="btn btn-primary btn-block btn-large"
            >
              Buyer
            </button>

            <button
              onClick={() => {
                history.push("/selleRegistation");
              }}
              type="submit"
              class="btn btn-primary btn-block btn-large"
            >
              {" "}
              Seller
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainregistation;
