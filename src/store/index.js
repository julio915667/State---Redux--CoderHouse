import { combineReducers, createStore } from "redux";
import categorieReducer from "./reducers/categories.reducer";


const rootReducer = combineReducers(
    {
        categories: categorieReducer
    },
)

export default createStore(rootReducer)