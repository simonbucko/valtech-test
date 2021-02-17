import React from "react";
import Products from "../Products/Products";
import CustomPagination from "../CustomPagination/CustomPagination";

//mui
import Grid from "@material-ui/core/Grid";

const Main = () => {
  return (
    <Grid item md={9}>
      <Products />
      <CustomPagination />
    </Grid>
  );
};

export default Main;
