import { configureStore } from "@reduxjs/toolkit";
import selectedImageReducer from "./selectedImageSlice";

export const store = configureStore({
  reducer: {
    selectedImage: selectedImageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
