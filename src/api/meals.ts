import { Meals } from "@/types/Meal";
import { client } from "@/utils/axiosClient"

export const getAllMeals = () => {
  return client.get<Meals>('/search.php?s=');
}

export const getMealsByFilter = (url: string) => {
  return client.get(`/filter.php?${url}`);
}

export const getDetailedMeal = (mealId: number) => {
  return client.get(`/lookup.php?i=${mealId}`);
}
