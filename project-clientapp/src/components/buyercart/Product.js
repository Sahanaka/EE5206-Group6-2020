import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Product(props) {
  const classes = useStyles();
  const { onAdd } = props;
  const [product, setProduct] = useState([]);

  const productArray = [];
  useEffect(() => {
    setProduct(props.product)
    productArray.push(props)
  });
  

  const showRecordDetails = (data) => {
   // setRecordForEdit(data);
   console.log("products")
  };
 
  const imageCard = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    >
      <img src={data.imageSource} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5 style={{ fontWeight: "bold" }}>{data.title}</h5>
        <span>LKR : {data.price}.00/=</span> <br />
        <span>Quantity : {data.quantity} </span> <br />
        <span>Availabe Amount : {data.availabeAmount}</span> <br />
        <span>Size : {data.size}</span> <br />
        <span>Discount : {data.discount}</span> <br />
        <button
          className="btn btn-light delete-button"
          onClick={console.log("clicked")}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
    console.log("prodcuts to dis", productArray.length)
  return (
   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
            <br />
            Rs:{product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => onAdd(product)} size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
