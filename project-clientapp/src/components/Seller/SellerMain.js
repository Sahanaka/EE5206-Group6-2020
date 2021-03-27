import React from "react";
import { Link } from "react-router-dom";

const SellerMain = ({ match }) => {
  console.log(match.params.id)
  return (
    <div>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>RoyalUI Admin</title>
      {/* plugins:css */}
      <link rel="stylesheet" href="vendors/ti-icons/css/themify-icons.css" />
      <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css" />
      {/* endinject */}

      {/*navigation bar link*/}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover:not(.active) {\n  background-color: #111;\n}\n\n.active {\n  background-color: #4CAF50;\n}\n",
        }}
      />

      {/* plugin css for this page */}
      {/* End plugin css for this page */}
      {/* inject:css */}
      <link rel="stylesheet" href="css/style.css" />
      {/* endinject */}
      <link rel="shortcut icon" href="images/favicon.png" />

      <style
        dangerouslySetInnerHTML={{
          __html: "\nbody {\n  background-color: lightgray;\n}\n",
        }}
      />

      <div className="container-scroller">
        {/* partial:partials/_navbar.html */}

        {/* partial */}

        <div className="sellermain">
          <div className="container-fluid page-body-wrapper">
            {/* partial:partials/_sidebar.html */}
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    <i className="ti-shield menu-icon" />
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#ui-basic"
                    aria-expanded="false"
                    aria-controls="ui-basic"
                  >
                    <i className="ti-palette menu-icon" />
                    <span className="menu-title">My Profile</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/buttons.html"
                        >
                          Buttons
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/typography.html"
                        >
                          Typography
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                    <i className="ti-layout-list-post menu-icon" />
                    <Link to="/store">Store</Link>
                </li>
                <li className="nav-item">
                    <i className="ti-layout-list-post menu-icon" />
                    <Link to="/ProductList">Products</Link>
                </li>
                <li className="nav-item">
                    <i className="ti-layout-list-post menu-icon" />
                    <Link to={`/ShopItemsSeller/${1}`}>Shop Items</Link>
                </li>
              </ul>
            </nav>
            {/* partial */}
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h1 className="font-weight-bold mb-0">LOTTE Market</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-title text-md-center text-xl-left">
                          Total Sales
                        </p>
                        <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                          <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            34040
                          </h3>
                          <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0" />
                        </div>
                        <p className="mb-0 mt-2 text-danger" center>
                          0.12%
                          <span className="text-black ml-1">
                            <small>(30 days)</small>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-title text-md-center text-xl-left">
                          No of Orders
                        </p>
                        <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                          <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            47033
                          </h3>
                          <i className="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0" />
                        </div>
                        <p className="mb-0 mt-2 text-danger">
                          0.47%{" "}
                          <span className="text-black ml-1">
                            <small>(30 days)</small>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-title text-md-center text-xl-left">
                          Earning
                        </p>
                        <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                          <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            40016
                          </h3>
                          <i className="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0" />
                        </div>
                        <p className="mb-0 mt-2 text-success">
                          64.00%
                          <span className="text-black ml-1">
                            <small>(30 days)</small>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-title text-md-center text-xl-left">
                          Total Profit
                        </p>
                        <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                          <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            61344
                          </h3>
                          <i className="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0" />
                        </div>
                        <p className="mb-0 mt-2 text-success">
                          23.00%
                          <span className="text-black ml-1">
                            <small>(30 days)</small>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>Sales details</b>
                        </h5>
                        <p className="text-muted font-weight-light">
                          Received overcame oh sensible so at an. Formed do
                          change merely to county it. Am separate contempt
                          domestic to to oh. On relation my so addition
                          branched.
                        </p>
                        <div
                          id="sales-legend"
                          className="chartjs-legend mt-4 mb-2"
                        />
                        <canvas id="sales-chart" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card border-bottom-0">
                      <div className="card-body pb-0">
                        <h5 className="card-title">
                          <b>Earning Statistics</b>
                        </h5>
                        <p className="text-muted font-weight-light">
                          The argument in favor of using filler text goes
                          something like this: If you use real content in the
                          design process, anytime you reach a review
                        </p>
                      </div>
                      <canvas id="order-chart" className="w-100" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title mb-0">
                          Top selling Products
                        </h3>
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Sale</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Potato</td>
                                <td className="text-danger">
                                  {" "}
                                  28.76% <i className="ti-arrow-down" />
                                </td>
                                <td>
                                  <label className="badge badge-danger">
                                    Pending
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Fish</td>
                                <td className="text-danger">
                                  {" "}
                                  21.06% <i className="ti-arrow-down" />
                                </td>
                                <td>
                                  <label className="badge badge-warning">
                                    In progress
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Chiken</td>
                                <td className="text-danger">
                                  {" "}
                                  35.00% <i className="ti-arrow-down" />
                                </td>
                                <td>
                                  <label className="badge badge-info">
                                    Fixed
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Suger</td>
                                <td className="text-success">
                                  {" "}
                                  82.00% <i className="ti-arrow-up" />
                                </td>
                                <td>
                                  <label className="badge badge-success">
                                    Completed
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Salt</td>
                                <td className="text-success">
                                  {" "}
                                  98.05% <i className="ti-arrow-up" />
                                </td>
                                <td>
                                  <label className="badge badge-warning">
                                    In progress
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>Snacks</td>
                                <td className="text-danger">
                                  {" "}
                                  21.06% <i className="ti-arrow-down" />
                                </td>
                                <td>
                                  <label className="badge badge-info">
                                    Fixed
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">To Do Lists</h4>

                        <p className="text-muted font-weight-light">
                          The argument in favor of using filler text goes
                          something like this: If you use real content in the
                          design process, anytime you reach a review
                        </p>

                        <div className="add-items d-flex mb-0 mt-4">
                          <input
                            type="text"
                            className="form-control todo-list-input mr-2"
                            placeholder="Add new task"
                          />
                          <button className="add btn btn-icon text-primary todo-list-add-btn bg-transparent">
                            <i className="ti-location-arrow" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
              {/* partial:partials/_footer.html */}

              {/* partial */}
            </div>
            {/* main-panel ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
        {/* plugins:js */}
        {/* endinject */}
        {/* Plugin js for this page*/}
        {/* End plugin js for this page*/}
        {/* inject:js */}
        {/* endinject */}
        {/* Custom js for this page*/}
        {/* End custom js for this page*/}
      </div>
    </div>
  );
};

export default SellerMain;
