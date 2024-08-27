import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"; 
import mealsReducer from '../features/mealsSlice'; 
import categoriesReducer from '../features/categoriesSlice';

export const store = configureStore({ 
  reducer: { 
    meals: mealsReducer, 
    categories: categoriesReducer,
  }, 
}); 

export type AppDispatch = typeof store.dispatch; 
export type RootState = ReturnType<typeof store.getState>; 

export type AppThunk<ReturnType = void> = ThunkAction< 
  ReturnType, 
  RootState, 
  unknown, 
  Action<string> 
>;
