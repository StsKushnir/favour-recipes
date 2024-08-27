"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as categoriesActions from "@/features/categoriesSlice";

import * as mealsActions from "@/features/mealsSlice";

import TextField from "@mui/material/TextField";
import { filterMeals } from "@/utils/filterCategory";
import Link from "next/link";

export default function Home() {
  const [currCategory, setCurrCategory] = useState("");
  const [currQuery, setCurrQuery] = useState("");
  const [openCategories, setOpenCategories] = useState(false);
  const meals = useAppSelector((state) => state.meals.meals);
  const categories = useAppSelector((state) => state.categories.categories);
  const categoriesStatus = useAppSelector((state) => state.categories.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(mealsActions.getMealsAsync());
  }, []);

  useEffect(() => {
    dispatch(categoriesActions.getCategoriesAsync());
  }, []);

  const filteredMeals = filterMeals(meals, currCategory);

  console.log('filteredMeals:', filteredMeals)
  return ( 
    <main className="flex flex-col items-center justify-between w-[95%] p-4  mt-6">
      <div className="flex flex-col items-center ">
        <div className="">
          <TextField
            id="filled-basic"
            label="Filled"
            className="w-full mb-2 sm:w-[100%]"
            value={currQuery}
            onChange={(event) => {
              setCurrQuery(event.currentTarget.value);
            }}
            variant="filled"
            sx={{
              backgroundColor: "#e9dbb4",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // Нижня рамка
                },
                "&:hover fieldset": {
                  borderColor: "black", // Нижня рамка при наведенні
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Нижня рамка при фокусуванні
                },
              },
              "& .MuiInputLabel-root": {
                color: "black", // Колір мітки
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#f7a15a", // Колір мітки при фокусуванні
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#f7a15a", // Колір плейсхолдера
              },
            }}
          />
        </div>
        <div>
          <Link href='/categories' className="absolute right-0 bg-[#ca3123] p-2 text-[#E2E6E9] rounded-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => setOpenCategories(true)}>
            Look Categories
          </Link>
        </div>
        <div>
          <ul className="flex flex-wrap gap-x-4 mt-6 items-center justify-center gap-y-4">
            {filteredMeals.map((meal) => (
              <li
                key={meal.idMeal}
                className=" flex flex-col items-center justify-between p-6 border border-[#E2E6E9] bg-orange-100 w-[300px] h-[500px]"
              >
                <Image
                  src={meal.strMealThumb}
                  alt="dish-name"
                  width={250}
                  height={250}
                  className="mb-4 border-[4px] border-[#E2E6E9]"
                  priority
                />
                <ul className="gap-x-4">
                  <li className="flex items-center justify-center mb-4">
                    <p className="font-semibold text-lg">{meal.strMeal}</p>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-semibold text-base">Category:</p>
                    <p className="font-medium text-sm">{meal.strCategory}</p>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-semibold text-base">Cuisine:</p>
                    <p className="font-medium text-sm">{meal.strArea}</p>
                  </li>
                </ul>
                <span className="flex items-center justify-center mt-4">
                  <button className="bg-[#ca3123] p-2 text-[#E2E6E9] rounded-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                    ADD TO FAVORITES
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
