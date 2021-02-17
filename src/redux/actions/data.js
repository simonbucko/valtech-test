import { FETCH_DATA, MOVE_PAGE, ITEMS_PER_PAGE } from "../constants/actionTypes";
import { fetchProductsData } from '../../api/api';

export const fetchData = () => async (dispatch) => {
    try {
        const data = await fetchProductsData();
        dispatch({ type: FETCH_DATA, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const movePage = (page) => dispatch => {
    dispatch({ type: MOVE_PAGE, payload: page })
}

export const changeItemsPerPage = (value) => dispatch => {
    dispatch({ type: ITEMS_PER_PAGE, payload: value })
}