import { client } from "@/utils/axiosClient"

export const getAllCategories = () => {
  return client.get('/categories.php');
}
