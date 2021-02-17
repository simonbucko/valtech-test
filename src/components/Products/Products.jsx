import React from "react";
import Product from "./Product/Product";
//redux
import { useSelector } from "react-redux";
//mui
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Products = () => {
  const products = useSelector((state) => state.data.filteredArticles);
  const page = useSelector((state) => state.data.page);
  const itemsPerPage = useSelector((state) => state.data.itemsPerPage);

  return (
    <Grid container spacing={4}>
      {products.length ? (
        products
          .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
          .map((product) => <Product key={product.id} product={product} />)
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default Products;
