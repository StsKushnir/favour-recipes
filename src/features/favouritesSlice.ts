import { Meal } from "@/types/Meal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavouritesState {
  favourites: Meal[];
}

const initialState: FavouritesState = {
  favourites: [],
};7

export const FavouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    updateFavourites: (state: FavouritesState, action: PayloadAction<Meal>) => {
    const existingItem = state.favourites.find(favouritesItem => favouritesItem.idMeal === action.payload.idMeal);
    
    if (existingItem) {
      state.favourites = state.favourites.filter(favouritesItem =>
        favouritesItem.idMeal !== action.payload.idMeal
      )
    } else {
      state.favourites = [...state.favourites,  action.payload ];
    }
    }, 
  },
});

export const { updateFavourites } = FavouritesSlice.actions;
export default FavouritesSlice.reducer;
