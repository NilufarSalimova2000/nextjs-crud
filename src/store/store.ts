"use client";
import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./reducers/reducer";
export const store = configureStore({
  reducer: { myreducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
