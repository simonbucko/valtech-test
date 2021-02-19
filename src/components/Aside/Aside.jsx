import React from "react";

//mui
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircularProgress from "@material-ui/core/CircularProgress";

//redux
import { useDispatch } from "react-redux";
import { changeItemsPerPage, changeFilters } from "../../redux/actions/data";
import { useSelector } from "react-redux";

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
  const manufacturers = useSelector((state) => state.data.manufacturers);

  const handleSliderChange = (event, newValue) => {
    dispatch(changeItemsPerPage(newValue));
  };

  const handleCheckboxChange = (event) => {
    dispatch(changeFilters(event));
  };

  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h5">Filters</Typography>
      <FormControl component="fieldset">
        <FormGroup>
          <Grid container>
            {manufacturers ? (
              manufacturers.map((manufacturer) => (
                <Grid item xs={6} sm={4} md={12} key={manufacturer.name}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={manufacturer.isSelected}
                        onChange={handleCheckboxChange}
                        name={manufacturer.name}
                        color="primary"
                      />
                    }
                    label={manufacturer.name}
                  />
                </Grid>
              ))
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </FormGroup>
      </FormControl>
      <Typography variant="h5" id="discrete-slider-custom" gutterBottom>
        Items per page
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={12}>
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
      </Grid>
    </Grid>
  );
};

export default Aside;
