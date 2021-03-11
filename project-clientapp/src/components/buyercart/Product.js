import React from "react";
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
  const { product, onAdd } = props;
  return (
    // <div>
    //   <img className="Avatar " src={product.image} alt={product.name} />
    //   <h3>{product.name}</h3>
    //   <div>${product.price}</div>
    //   <div>
    //     <button onClick={() => onAdd(product)}>Add To Cart</button>
    //   </div>
    // </div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
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
