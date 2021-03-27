import React, { Component } from "react";
import "./style/landing.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReceiptIcon from "@material-ui/icons/Receipt";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Landing = () => {
  const classes = useStyles();
  let history = useHistory();

  const redirect = () => {
    history.push("/Mainregistration");
    history.push("/login");
  };
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1 className="x-large textnew text5">
          Sri Lanka's Largest Online Web Market
        </h1>
        <div className="widthofbutton textnew ">
          <Button
            onClick={() => {
              history.push("/Mainregistration");
            }}
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ReceiptIcon />}
          >
            Register
          </Button>
          <Button
            onClick={() => {
              history.push("/login");
            }}
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ReceiptIcon />}
          >
            Login
          </Button>
        </div>

        <p className="lead"></p>
      </div>
    </section>
  );
};

export default Landing;
