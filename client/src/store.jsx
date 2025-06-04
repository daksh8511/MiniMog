import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from './reducers/MenuSlices'
import InputBoxSlice from './reducers/InputBoxSlices'
import ColorSlice from './reducers/ColorSlice'

export const store = configureStore({
    reducer : {
        toggleSlice : MenuSlice,
        inputSlice : InputBoxSlice,
        ColorSlice : ColorSlice
    }
});