"use client"
import React, { useMemo } from 'react';
import { FavouritsContext } from './FavouritsContext';
import { Meal } from '@/types/Meal';
import { useLocaleStorage } from '@/utils/useLocaleStorage';


interface Props {
  children: React.ReactNode;
}

export const FavouritsContextProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useLocaleStorage<Meal[]>(
    'favItem',
    [],
  );

  const updateFavourites = (meal: Meal) => {
    const existingItem = favourites.find(favouritesItem => favouritesItem.idMeal === meal.idMeal);
    if (existingItem) {
      setFavourites(favourites.filter(favouritesItem =>
        favouritesItem.idMeal !== meal.idMeal
      ));
    } else {
      setFavourites([...favourites,  meal ]);
    }
  };

  
  const values = useMemo(
    () => ({
      favourites,
      onUpdateFavourites: updateFavourites,
    }),
    [favourites],
  );

  return (
    <FavouritsContext.Provider value={values}>{children}</FavouritsContext.Provider>
  );
};
