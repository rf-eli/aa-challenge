import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ImageData } from "../types/ImageData";

export const fetchImages = createAsyncThunk("images", async () => {
  const response = await fetch(
    "https://agencyanalytics-api.vercel.app/images.json"
  );
  const json = await response.json();
  const sorted = json.sort((a: ImageData, b: ImageData) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });
  return sorted;
});

interface ImagesState {
  data: ImageData[];
  status: "idle" | "loading" | "success" | "fail";
  error?: Error;
}

const initialState = {
  data: [],
  status: "idle",
} as ImagesState;

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    deleteImage: (state, action) => {
      state.data = state.data.filter((e) => e.id !== action.payload);
    },
    toggleFavoriteImage: (state, action) => {
      state.data = [
        ...state.data.slice(0, action.payload),
        {
          ...state.data[action.payload],
          favorited: !state.data[action.payload].favorited,
        },
        ...state.data.slice(action.payload + 1),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        if (state.status === "idle") {
          state.status = "loading";
        }
      })
      .addCase(
        fetchImages.fulfilled,
        (state, action: PayloadAction<ImageData>) => {
          state.data = state.data.concat(action.payload);
          state.status = "success";
        }
      );
  },
});

export const { deleteImage, toggleFavoriteImage } = imagesSlice.actions;
export default imagesSlice.reducer;
