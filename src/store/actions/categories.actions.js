import categoriesTypes from "../types/categories.type"
 const {SELECT_CATEGORY} = categoriesTypes
export const selectedCategory = (id) =>({
    type: SELECT_CATEGORY, categoryId: id
})