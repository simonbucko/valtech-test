import { FETCH_DATA, MOVE_PAGE, ITEMS_PER_PAGE, CHANGE_FILTERS, ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const initialState = {
    articles: [],
    filteredArticles: [],
    itemsPerPage: 12,
    page: 1,
    pages: 0,
    headline: "",
    manufacturer: null,
    manufacturers: [],
    smuuid: null,
    cart: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, ...action.payload, filteredArticles: action.payload.articles, pages: Math.ceil(action.payload.articles.length / state.itemsPerPage) }

        case MOVE_PAGE:
            return { ...state, page: action.payload }

        case ITEMS_PER_PAGE:
            return { ...state, page: 1, itemsPerPage: action.payload, pages: Math.ceil(state.filteredArticles.length / action.payload) }

        case CHANGE_FILTERS:
            const manufacturers = state.manufacturers.map(manu => manu.name === action.payload.target.name ? { ...manu, isSelected: action.payload.target.checked } : manu);
            const filters = manufacturers.filter(
                (manu) => manu.isSelected
            );

            const filteredArticles = filters.length === 0 ? state.articles : (
                state.articles.filter(article => {
                    for (let i = 0; i < filters.length; i++) {
                        if (article.manufacturer === filters[i].name) {
                            return true;
                        }
                    }
                    return false
                })
            )

            return { ...state, manufacturers, filteredArticles, page: 1, pages: Math.ceil(filteredArticles.length / state.itemsPerPage) }

        case ADD_TO_CART:
            const newCart = [...state.cart];
            newCart.push(action.payload)
            return { ...state, cart: newCart }

        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }
        default:
            return state;
    }

}

export default dataReducer;