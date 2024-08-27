"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as categoriesActions from "@/features/categoriesSlice";
import { Recipes }from "@/components/Recipes/Recipes";
import Link from "next/link";

const Categories: React.FC = () => {
  const [currCategory, setCurrCategory] = useState('');
  const categories = useAppSelector((state) => state.categories.categories);
  const categoriesStatus = useAppSelector((state) => state.categories.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(categoriesActions.getCategoriesAsync());
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center justify-between w-[95%] p-4  mt-6">
        {currCategory 
        ? 
        <Recipes currCategory={currCategory} /> 
        : 
        <>
        <h1 className="font-bold text-2xl mt-6 ">
        YOUR BEST RECIPES FROM WHOLE WORLD
      </h1>
        <ul className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((category) => (
            <li className="hover:scale-110 transition-all duration-300 ease-in-out border-[4px] border-[#E2E6E9] hover:border-[#f7a15a]"
            key={category.idCategory}
            onClick={() => setCurrCategory(category.strCategory)}>
              <Link href={`/categories/${category.strCategory}`} className="flex flex-col items-center text-center ">

                <Image
                  src={category.strCategoryThumb}
                  alt="dish-name"
                  width={180}
                  height={180}
                  className="border-none"
                />
                <p className="mt-4">{category.strCategory}</p>
              </Link>
            </li>
          ))}
        </ul>
        </>
        }
        <Link href="/" className="fixed right-[5%] top-[25%] bg-[#ca3123] p-2 text-[#E2E6E9] rounded-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
          Back to home
        </Link>
      </div>
    </>
  );
}

export default Categories;