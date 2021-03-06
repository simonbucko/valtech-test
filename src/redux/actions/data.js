import { FETCH_DATA, MOVE_PAGE, ITEMS_PER_PAGE, CHANGE_FILTERS, ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";
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

export const changeFilters = (event) => dispatch => {
    dispatch({ type: CHANGE_FILTERS, payload: event })
}

export const addToCart = (product) => dispatch => {
    dispatch({ type: ADD_TO_CART, payload: product })
}

export const removeFromCart = (id) => dispatch => {
    dispatch({ type: REMOVE_FROM_CART, payload: id })
}