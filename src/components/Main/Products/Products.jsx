import React from "react";
import Product from "./Product/Product";
//redux
import { useSelector } from "react-redux";
//mui
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const Products = () => {
  const products = useSelector((state) => state.data.filteredArticles);
  const page = useSelector((state) => state.data.page);
  const itemsPerPage = useSelector((state) => state.data.itemsPerPage);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {products.length ? (
        products.length > 12 ? (
          products
            .slice(
              (page - 1) * itemsPerPage,
              (page - 1) * itemsPerPage + itemsPerPage
            )
            .map((product) => <Product key={product.id} product={product} />)
        ) : (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )
      ) : (
        <Typography variant="h6">
          {" "}
          No products found. Please try other brand.{" "}
        </Typography>
      )}
    </Grid>
  );
};

export default Products;
