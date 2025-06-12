import { createSlice } from "@reduxjs/toolkit";

const ProductImageSlice = createSlice({
    name : "ProductImageSlice",
    initialState : [],
    reducers : {
        addProductImage : (state, action) => {
            return action.payload
        },
        removeProductImage : (state, action) => {
            const filtered = state.filter((data) => data !== action.payload)
            return filtered
        }
    }
})

export const {addProductImage, removeProductImage} = ProductImageSlice.actions
export default ProductImageSlice.reducer