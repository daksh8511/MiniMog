import { createSlice } from "@reduxjs/toolkit";

const QuickViewSlice = createSlice({
  name: "quick-view",
  initialState: [],
  reducers: {
    quickViewAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { quickViewAction } = QuickViewSlice.actions;
export default QuickViewSlice.reducer;
