import React from "react";
import Product from "./Product";
import Card from "@material-ui/core/Card";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="Card col-3">
      <h2>Products</h2>
      <div className="container">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
