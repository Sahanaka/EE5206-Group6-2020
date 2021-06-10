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
          
        </li>
        <li className="list-group-item">
          <Link to="/sellerMain" className="text-decoration-none stretched-link">
            Leather Bag
          </Link>
          
        </li>
        <li className="list-group-item">
          
          Trausers
        </li>
        <li className="list-group-item">
          
          Sweater & Cardigans
        </li>
        <li className="list-group-item">
          
          High Heels
        </li>
        <li className="list-group-item">
          
          Coats & Jackets
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
