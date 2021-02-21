import React from "react";
import Item from "./itemGrid";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      justify: "center",
    },
  },
}));

const item = [
  {
    ProductId: 1,
    name: "Item_1",
    AvailabeAmount: "AvailabeAmount_1",
    Price: "$20",
    image: "https://www.w3schools.com/images/w3schools_green.jpg",
    Discount: "30%",
  },
  {
    ProductId: 2,
    name: "Item_2",
    AvailabeAmount: "AvailabeAmount_2",
    Price: "$30",
    image: "https://www.w3schools.com/images/w3schools_green.jpg ",
    Discount: "20%",
  },
];

const Items = () => {
  const classes = useStyles();
  return (
    <main>
      <h2 className="">Shop_name</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="filled-basic" label="Search" variant="filled" />
      </form>
      <br />
      <Card spacing={10}>
        {item.map((item) => (
          <Card item key={item.ProductId} md={20}>
            <Item item={item} />
            <br />
          </Card>
        ))}
      </Card>
    </main>
  );
};

export default Items;
