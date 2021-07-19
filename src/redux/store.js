import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './reducers/dataReducer'
import uiReducer from './reducers/uiReducer'

const initialState = {}

const middleware = [thunk];

const reducers = combineReducers({
    data: dataReducer,
    UI: uiReducer
});

//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware), typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? a => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;
