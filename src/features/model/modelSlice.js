import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modelSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OpenModel: (state, action) => {
      state.isOpen = true;
    },
    CloseModel: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { OpenModel, CloseModel } = modelSlice.actions;
export default modelSlice.reducer;
