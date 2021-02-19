import React from "react";
import Products from "./Products/Products";
import FilterChips from "./FilterChips/FilterChips";
import CustomPagination from "./CustomPagination/CustomPagination";

//mui
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";

const Main = () => {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={8} className={classes.grid}>
      <FilterChips />
      <Products />
      <CustomPagination />
    </Grid>
  );
};

export default Main;
