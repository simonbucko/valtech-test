import React from "react";

//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilters } from "../../../redux/actions/data";

//mui
import CircularProgress from "@material-ui/core/CircularProgress";
import Chip from "@material-ui/core/Chip";

const FilterChips = () => {
  const dispatch = useDispatch();
  const manufacturers = useSelector((state) => state.data.manufacturers).filter(
    (manu) => manu.isSelected
  );

  const handleRemoveFilter = (event, name) => {
    event.target.name = name;
    event.target.checked = false;
    dispatch(changeFilters(event));
  };

  return (
    <div>
      {manufacturers ? (
        manufacturers.map((manu) => (
          <Chip
            key={manu.name}
            label={manu.name}
            onClick={(e) => handleRemoveFilter(e, manu.name)}
            onDelete={(e) => handleRemoveFilter(e, manu.name)}
            color="primary"
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default FilterChips;
