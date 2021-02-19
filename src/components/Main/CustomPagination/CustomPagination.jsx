import React from "react";
//mui
import Pagination from "@material-ui/lab/Pagination";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { movePage } from "../../../redux/actions/data";

const CustomPagination = () => {
  const dispatch = useDispatch();
  const pagesCount = useSelector((state) => state.data.pages);
  const page = useSelector((state) => state.data.page);
  const handleChange = (event, value) => {
    dispatch(movePage(value));
  };
  return (
    <div>
      <Pagination
        count={pagesCount}
        size="large"
        page={page}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomPagination;
