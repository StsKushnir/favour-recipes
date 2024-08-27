"use client";
import { getAllMeals } from "@/api/meals";
import { Meal } from "@/types/Meal";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface MealsState {
  meals: Meal[];
  status: "idle" | "loading" | "failed";
}

const initialState: MealsState = {
  meals: [],
  status: "idle",
};

export const getMealsAsync = createAsyncThunk(
  "meals/fetchMeals",
  async () => {
    const MealsFromServer = await getAllMeals();

    return MealsFromServer;
  }
);

export const MealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMealsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMealsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.meals = action.payload.meals;
      })
      .addCase(getMealsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = MealsSlice.actions;
export default MealsSlice.reducer;
