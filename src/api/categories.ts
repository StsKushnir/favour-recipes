import { Categories } from "@/types/Category";
import { client } from "@/utils/axiosClient"

export const getAllCategories = () => {
  return client.get<Categories>('/categories.php');
}
