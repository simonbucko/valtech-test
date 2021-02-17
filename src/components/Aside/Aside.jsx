import React from "react";

//mui
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

//redux
import { useDispatch } from "react-redux";
import { changeItemsPerPage } from "../../redux/actions/data";

const marks = [
  {
    value: 12,
    label: "12",
  },
  {
    value: 24,
    label: "24",
  },
  {
    value: 36,
    label: "36",
  },
];

const Aside = () => {
  const dispatch = useDispatch();
  const handleSliderChange = (event, newValue) => {
    dispatch(changeItemsPerPage(newValue));
  };
  return (
    <Grid item md={3}>
      <Typography variant="h4" id="discrete-slider-custom" gutterBottom>
        Items per page
      </Typography>
      <Slider
        defaultValue={12}
        aria-labelledby="discrete-slider-custom"
        step={12}
        valueLabelDisplay="auto"
        marks={marks}
        min={12}
        max={36}
        onChange={handleSliderChange}
      />
    </Grid>
  );
};

export default Aside;
