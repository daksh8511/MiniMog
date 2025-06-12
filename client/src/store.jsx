import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from './reducers/MenuSlices'
import InputBoxSlice from './reducers/InputBoxSlices'
import ColorSlice from './reducers/ColorSlice'
import ProductImageSlice from './reducers/ProductImage'
import QuickViewSlice from './reducers/QuickViewSlice'

export const store = configureStore({
    reducer : {
        toggleSlice : MenuSlice,
        inputSlice : InputBoxSlice,
        ColorSlice : ColorSlice,
        ProductImageSlice : ProductImageSlice,
        QuickViewSlice : QuickViewSlice
    }
});