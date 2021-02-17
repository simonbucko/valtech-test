import React from "react";

//mui
import Grid from "@material-ui/core/Grid";

const Product = ({ product }) => {
  return (
    <Grid item md={4}>
      <div>{product.name}</div>
    </Grid>
  );
};

export default Product;
