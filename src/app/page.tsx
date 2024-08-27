"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as categoriesActions from "@/features/categoriesSlice";
import { Recipes }from "@/components/Recipes/Recipes";
import { Categories } from "@/components/Categories/Categories";

export default function Home() {
  const [currCategory, setCurrCategory] = useState('');
  const categories = useAppSelector((state) => state.categories.categories);
  const categoriesStatus = useAppSelector((state) => state.categories.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(categoriesActions.getCategoriesAsync());
  }, []);
  console.log('categories:', categories)
  return (
      <main className="flex flex-col items-center justify-between w-[95%] p-4  mt-6">
        {/* <Categories /> */}
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </main>

  );
}
