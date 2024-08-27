"use client";
import * as mealsActions from "@/features/mealsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Meal } from "@/types/Meal";
import { findByCategory } from "@/utils/filterCategory";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Recipes: React.FC = () => {
  const meals = useAppSelector((state) => state.meals.meals);
  const dispatch = useAppDispatch();

  const params = useParams(); 
  const categoryName = params.categoryName; 

  useEffect(() => {
    dispatch(mealsActions.getMealsAsync());
  }, [dispatch]);

  let filteredCategories: Meal[] = [];

  if (typeof categoryName === 'string') {
    filteredCategories = findByCategory(meals, categoryName);
  }

  return (
    <>
      {filteredCategories.length > 0 ? (
        <div className="flex flex-col items-center justify-center">
          <h2>Best in category - {categoryName}</h2>
          <ul className="flex flex-wrap gap-x-4 mt-6 items-center justify-center gap-y-4">
            {filteredCategories.map((meal) => (
              <li
                key={meal.idMeal}
                className="p-6 border border-[#E2E6E9] bg-orange-100"
              >
                <Link href={`/${meal.strMeal}`}>
                  <Image
                    src={meal.strMealThumb}
                    alt="dish-name"
                    width={180}
                    height={180}
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
                </Link>
              </li>
            ))}
          </ul>
          <a
            href=""
            className="mt-10 bg-[#ca3123] p-2 text-[#E2E6E9] rounded-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Back to menu
          </a>
        </div>
      ) : (
        <>
          <p className="text-red-500">
            Unfortunately, there are no recipes yet
          </p>
          <Image
            src="/icons/no-dishes.png"
            alt="no-dishes"
            width={250}
            height={250}
            className=""
          />
          <a
            href=""
            className="bg-[#ca3123] p-2 text-[#E2E6E9] rounded-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Back to menu
          </a>
        </>
      )}
    </>
  );
};

export default Recipes;
