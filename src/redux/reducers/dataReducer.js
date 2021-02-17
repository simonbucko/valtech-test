import { FETCH_DATA, MOVE_PAGE, ITEMS_PER_PAGE, CHANGE_FILTERS } from "../constants/actionTypes";

const initialState = {
    articles: [],
    filteredArticles: [],
    itemsPerPage: 12,
    page: 1,
    pages: 0,
    headline: "",
    manufacturer: null,
    manufacturers: [],
    smuuid: null
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, ...action.payload, filteredArticles: action.payload.articles, pages: Math.floor(action.payload.articles.length / state.itemsPerPage) }

        case MOVE_PAGE:
            return { ...state, page: action.payload }

        case ITEMS_PER_PAGE:
            return { ...state, page: 1, itemsPerPage: action.payload, pages: Math.floor(state.filteredArticles.length / action.payload) }

        case CHANGE_FILTERS:
            return { ...state, manufacturers: state.manufacturers.map(manu => manu.name === action.payload.target.name ? { ...manu, isSelected: action.payload.target.checked } : manu) }
        default:
            return state;
    }

}

export default dataReducer;