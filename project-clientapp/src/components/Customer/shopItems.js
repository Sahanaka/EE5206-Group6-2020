import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getShops } from "../../Actions/customer";
import Spinner from "../layout/Spinner";
import "./style/shopitems.css"

import Paper from '@material-ui/core/Paper';
const Products = ({ getShops, shops: { shops, loading } }) => {
 
  useEffect(async () => {
    getShops();
  }, [getShops]);

  const [searchName, setSearchName] = useState('');
  
  const nameFilter = (event) => setSearchName(event.target.value.toLowerCase());


  
  const imageCard = (data) => (
    
    <Paper   elevation={3}>
    <div style={{ padding:"10px" ,width:"200px"}} className="border border-dark">
    <div className="card" style={{margin:"15px"}}>
      <img style={{width: "130px" ,margin: "auto"}} src={data.imageSource} className="card-img-top rounded-circle"  />
      <div className="card-body" style={{margin:"20px"}}>
        <h5 style={{ fontWeight: "bold" }}>{data.name}</h5>
        <span>Address : {data.address}</span> <br />
        <span>Contact : {data.contatctNo} </span> <br />
        <span>Category : {data.cetogory}</span> <br />
        <Link to={`shop/${data.sellerId}`}>
          <button  style={{margin:"5px",padding:"10px"}} className="btn btn-outline-primary" Add to Cart>view Shop 
            <li><i class="fas fa-store"></i>
            </li>
          </button>
        </Link>
      </div>
    </div>
    </div>
    </Paper>
  );

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <br/>
          <div className="row_shopsitem">
            <div className="col-md-12">
              <div className="col-md-4 searchcard">
                <input
                  type="search"
                  className="form-control"
                  placeholder={"Filter by shop category"}
                  onChange={nameFilter}
                />
              </div>
              <div className=" jumbotron-fluid py-4">
                <div className="container text-center">
                  <h1 className="display-4">{shops.sellerId}</h1>
                  
                </div>
              </div>
            </div>
            <div style={{ padding:"10px"}} className="col-md-12">
            <tbody>
              <div  id="product">
                {shops
                  .filter((productList) => {
                    if (searchName === "") {
                      return productList;
                    } else if (
                      productList.cetogory
                        .toLocaleLowerCase()
                        .includes(searchName)
                    ) {
                      return productList;
                    }
                  })
                  .map((productList) => (
                    <tc style={{ padding:"10px"}}>
                      <td style={{ padding:"10px"}}>{imageCard(productList)}</td>
                    </tc>
                  ))}
              </div>
              </tbody>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Products.propTypes = {
  getShops: PropTypes.func.isRequired,
  shops: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shops: state.seller,
});

export default connect(mapStateToProps, { getShops })(Products);
