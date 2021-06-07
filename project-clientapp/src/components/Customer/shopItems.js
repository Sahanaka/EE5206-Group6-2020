import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getShops } from "../../Actions/customer";
import Spinner from "../layout/Spinner";
import "./style/shopitems.css"
const Products = ({ getShops, shops: { shops, loading }, ...props }) => {
  useEffect(async () => {
    getShops();
    setSearchName(props.filterCategory);
  }, [getShops, props.filterCategory]);

  const [searchName, setSearchName] = useState('');
  
  const nameFilter = (event) => setSearchName(event.target.value.toLowerCase());

  const imageCard = (data) => (
    <div>
      <img src={data.imageSource} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5 style={{ fontWeight: "bold" }}>{data.name}</h5>
        <span>Address : {data.address}</span> <br />
        <span>Contact : {data.contatctNo} </span> <br />
        <span>Category : {data.cetogory}</span> <br />
        <Link to={`shop/${data.sellerId}`}>
          <button className="btn btn-light" Add to Cart>
            <i class="fas fa-store"></i>
          </button>
        </Link>
      </div>
    </div>
  );

  console.log("Cat", props.filterCategory)
  console.log("name", searchName)

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <br/>
          <div className="row_shopsitem">
            <div className="col-md-12">
              <div className="col-md-2 searchcard">
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
            <div className="col-md-12">
              <div id="product">
                {shops
                  .filter((productList) => {
                    if (searchName === "") {
                      return productList;
                    } else if (
                      productList.cetogory
                        .toLocaleLowerCase()
                        .includes(searchName.toLocaleLowerCase())
                    ) {
                      return productList;
                    }
                  })
                  .map((productList) => (
                    <tc>
                      <td>{imageCard(productList)}</td>
                    </tc>
                  ))}
              </div>
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

const mapStateToProps = (state, props) => ({
  shops: state.seller,
});

export default connect(mapStateToProps, { getShops })(Products);
