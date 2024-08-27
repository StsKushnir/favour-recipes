export interface Category {
  idCategory: number,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string,
}

export interface Categories {
  categories: Category[],
}