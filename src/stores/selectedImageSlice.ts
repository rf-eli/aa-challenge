import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ImageData } from "../types/ImageData";

const initialState = {} as ImageData;

export const selectedImageSlice = createSlice({
  name: "selectedImage",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<ImageData>) => {
      state.id = action.payload.id;
      state.filename = action.payload.filename;
      state.sizeInBytes = action.payload.sizeInBytes;
      state.uploadedBy = action.payload.uploadedBy;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.dimensions = action.payload.dimensions;
      state.resolution = action.payload.resolution;
      state.description = action.payload.description;
    },
  },
});

export const { select } = selectedImageSlice.actions;
export default selectedImageSlice.reducer;
