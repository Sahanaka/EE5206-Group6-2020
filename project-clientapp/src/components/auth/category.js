import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {/* <Link to="/" className="text-decoration-none stretched-link">
            Leather Bag
          </Link> */}
        </li>
        <li className="list-group-item">
          {/* <Link to="/" className="text-decoration-none stretched-link">
            Leather Bag
          </Link> */}
          Food Shops
        </li>
        <li className="list-group-item">
          {/* <Link to="/" className="text-decoration-none stretched-link">
            Trausers
          </Link> */}
          Trausers
        </li>
        <li className="list-group-item">
          {/* <Link to="/" className="text-decoration-none stretched-link">
            Sweater & Cardigans
          </Link> */}
          Sweater & Cardigans
        </li>
        <li className="list-group-item">
          {/* <Link to="/" className="text-decoration-none stretched-link">
            High Heels
          </Link> */}
          High Heels
        </li>
        <li className="list-group-item">
          {/* <Link to="/" className="text-decoration-none stretched-link">
            Coats & Jackets
          </Link> */}
          Coats & Jackets
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
