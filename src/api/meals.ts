import { Meals } from "@/types/Meal";
import { client } from "@/utils/axiosClient"

export const getAllMeals = () => {
  return client.get<Meals>('/search.php?s=');
}

export const getMealsByFilter = (category: string) => {
  return client.get(`/filter.php?c=${category}`);
}

export const getDetailedMeal = (mealId: number) => {
  return client.get(`/lookup.php?i=${mealId}`);
}
