import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getShops } from "../../Actions/customer";
import Spinner from "../layout/Spinner";

const Products = ({ getShops, shops: { shops, loading } }) => {
  useEffect(async () => {
    getShops();
  }, [getShops]);

  const imageCard = (data) => (
    <div>
      <img src={data.imageSource} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5 style={{ fontWeight: "bold" }}>{data.name}</h5>
        <span>Address : {data.address}</span> <br />
        <span>Contact : {data.contatctNo} </span> <br />
        <span>Category : {data.cetogory}</span> <br />
        <Link to={`shop/${data.sellerId}`}>
        <button
          className="btn btn-light"
          Add
          to
          Cart
          
        >
         <i class="fas fa-store"></i>
        </button></Link>
      </div>
    </div>
  );

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
         <div className="row">
            <div className="col-md-12">
              <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                  <h1 className="display-4">{shops.sellerId}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <table>
                <tbody>
                  {
                    //tr > 4 td
                    [...Array(Math.ceil(shops.length / 4))].map((e, i) => (
                      <tr key={i}>
                        <td>{imageCard(shops[4 * i])}</td>
                        <td>
                          {shops[4 * i + 1]
                            ? imageCard(shops[4 * i + 1])
                            : null}
                        </td>
                        <td>
                          {shops[4 * i + 2]
                            ? imageCard(shops[4 * i + 2])
                            : null}
                        </td>
                        <td>
                          {shops[4 * i + 3]
                            ? imageCard(shops[4 * i + 3])
                            : null}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
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
