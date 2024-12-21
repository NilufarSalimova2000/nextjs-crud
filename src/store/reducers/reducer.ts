"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
};

const MainReducer = createSlice({
  name: "MainReduce",
  initialState,
  reducers: {
    EditDataReducer: (
      state,
      action: PayloadAction<{ title: string | any; description: string | any }>
    ) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});
export default MainReducer.reducer;
export const { EditDataReducer } = MainReducer.actions;
