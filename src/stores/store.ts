import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./imagesSlice";
import selectedImageReducer from "./selectedImageSlice";

export const store = configureStore({
  reducer: {
    selectedImage: selectedImageReducer,
    images: imagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
