"use client";
import { getAllCategories } from "@/api/categories";
import { Category } from "@/types/Category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CategoriesState {
  categories: Category[];
  status: "idle" | "loading" | "failed";
}

const initialState: CategoriesState = {
  categories: [],
  status: "idle",
};

export const getCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const CategoriesFromServer = await getAllCategories();

    return CategoriesFromServer;
  }
);

export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload.categories;
      })
      .addCase(getCategoriesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
