import React from "react";

//mui
import Grid from "@material-ui/core/Grid";

//redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/data";
import { useSelector } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.data.cart);
  const handleAddToCart = () => {
    cart.filter((item) => item.id === product.id).length ||
      dispatch(addToCart(product));
  };

  return (
    <Grid item md={4}>
      <div onClick={handleAddToCart}>{product.name}</div>
    </Grid>
  );
};

export default Product;
