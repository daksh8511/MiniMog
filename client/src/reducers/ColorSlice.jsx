import { createSlice } from "@reduxjs/toolkit";

const ColorSlice = createSlice({
  name: "Color Slice",
  initialState: [],
  reducers: {
    addColors: (state, action) => {
        return action.payload
    },
    removeColor: (state, action) => {
      const filtered = state.filter((color) => color !== action.payload);
      return filtered;
    },
  },
});

export const { addColors, removeColor } = ColorSlice.actions;

export default ColorSlice.reducer;
