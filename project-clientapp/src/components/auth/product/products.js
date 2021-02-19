import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Product from "./product";

import { getShops } from "../../../Actions/customer";

const products = [
  {
    id: 1,
    name: "Shop1",
    Category: "Category_1",
    Address: "Address_1",
    image: "https://www.w3schools.com/images/w3schools_green.jpg",
  },
  {
    id: 2,
    name: "Shop2",
    Category: "Category_2",
    Address: "Address_2",
    image: "https://www.w3schools.com/images/w3schools_green.jpg ",
  },
];

const Products = () => {
  const [shops, setShops] = useState();
  useEffect(async () => {
    const res = await getShops("retail");
    setShops(res);
  }, []);
  console.log('shops', shops);
  return (
    <main>
      <br />
      <Grid conrtainer justify="center" spacing={4}>
        {shops.map((product) => (
          <Grid item key={product.id} md={4}>
            <Product product={product} />
            <br />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
