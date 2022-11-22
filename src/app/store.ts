import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../slices/characterSlice";

const store = configureStore({
  reducer: {
    character: characterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
