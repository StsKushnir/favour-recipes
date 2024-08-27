"use client"
import { FavouritsContext } from './FavouritsContext';
import { useContext } from 'react';

export const useFavouritsContext = () => useContext(FavouritsContext);
