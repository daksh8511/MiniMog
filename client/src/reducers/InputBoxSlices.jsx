import { createSlice } from "@reduxjs/toolkit";

export const InputBoxSlice = createSlice({
  name: "InputBoxSlice",
  initialState: [],
  reducers: {
    setInputs: (state, action) => {
       return action.payload
    },
  },
});

export const { setInputs } = InputBoxSlice.actions;

export default InputBoxSlice.reducer;
