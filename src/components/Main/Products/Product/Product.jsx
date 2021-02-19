import React from "react";
import useStyles from "./style";
//mui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

//redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/actions/data";
import { useSelector } from "react-redux";

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.data.cart);
  const handleAddToCart = () => {
    cart.filter((item) => item.id === product.id).length ||
      dispatch(addToCart(product));
  };

  return (
    <Grid item lg={4} md={6}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          src={`https://github.com/simonbucko/valtech-test/blob/main/src/assets/images/${product.image.file}?raw=true`}
          height={400}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <span>
            <Typography variant="h6" style={{ display: "inline-block" }}>
              {`${product.price.primary.raw} £`}
            </Typography>
            <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
              <AddShoppingCart />
            </IconButton>
          </span>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
