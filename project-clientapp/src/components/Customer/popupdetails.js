import React from "react";
import "./style/popup.css"
 
const PopupDetails = props => {
  return (
    <div className="popup-box">
      <div className="box_popup">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <img width="100" height="200" src="https://media.giphy.com/media/fxI0mULY4j8oZ9VK7X/giphy.gif"></img>
        {props.content}
      </div>
    </div>
  );
};
 
export default PopupDetails;