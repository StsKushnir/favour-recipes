import { Meal } from "@/types/Meal";

export const findByCategory = (meals: Meal[] , currCategory: string) => {
  const copyMeals = [...meals];
  return copyMeals.filter(meal => meal.strCategory === currCategory)
}

export const filterMeals = (meals: Meal[] , query: string) => {
  const copyMeals = [...meals];
  return copyMeals.filter(meal => meal.strMeal.includes(query))
}