"use client"
import React from 'react';
import { Meal } from '@/types/Meal';

export interface FavouritsContextType {
  favourites: Meal[];
  onUpdateFavourites: (meal: Meal) => void;
}

export const FavouritsContext = React.createContext<FavouritsContextType>({
  favourites: [],
  onUpdateFavourites: () => {},
});
