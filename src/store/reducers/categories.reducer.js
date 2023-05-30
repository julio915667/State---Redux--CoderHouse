import { CATEGORIES } from "../../constants/data/categorias";
import { categoriesTypes } from "../types";
const {SELECT_CATEGORY} = categoriesTypes
const initialState = {
    data: CATEGORIES,
    selected: null
}

const categorieReducer = (state = initialState, action) =>{
   switch(action.type){
    case SELECT_CATEGORY:
        const indexCategories = state.data.findIndex((category) => category.id === action.categoryId)
        if (indexCategories === -1) return state;
        return {
          ...state,
          selected: state.data[indexCategories],
        };
      default:
        return state;
   }
   
}
export default categorieReducer