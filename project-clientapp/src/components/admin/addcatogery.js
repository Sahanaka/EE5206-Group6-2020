import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Style/addcategory.css";

import "w3-css/w3.css";







const Addcategory = () => {
   
    
      return (

        <div className="body_mainregister">
        <div className="txt_mainregister">
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
          <div className=" box-a_main ">
            <hr/>
            <h1 className="Main textalign">Add Category</h1>
            <div className="">
              

              <input
                type="text"
                placeholder="Title"
                name="title"
                // value={name}
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="">
              
              <input
                type="text"
                placeholder="Sub Category"
                name="subcategory"
                // value={address}
                // onChange={(e) => onChange(e)}
              />
              
            </div>
  
            <div className="row_main_category ">
            <input type="submit" className="btn btn-primary" value="Add" />
              {/* <button
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
              </button> */}
  
              {/* <div>
            <Button href="/Register" variant="contained" color="primary">
              Seller
            </Button>
          </div> */}
            </div>
          </div>
        </div>
      </div>















          
            
            

            
       
        
      )
    }
    export default Addcategory;