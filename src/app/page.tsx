'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks"; 
import Image from "next/image"; 
import { useEffect } from "react"; 
import * as mealsActions from "@/features/mealsSlice"; 
import Header from "@/components/Header/Header";

export default function Home() { 
  const meals = useAppSelector((state) => state.meals.meals); 
  const mealsStatus = useAppSelector((state) => state.meals.status); 
  const dispatch = useAppDispatch(); 

  useEffect(() => { 
    dispatch(mealsActions.getMealsAsync()); 
  }, [])

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between w-[95%] p-4  mt-6">
        <h1 className="font-bold text-2xl mt-6 ">
          YOUR BEST RECIPES FROM WHOLE WORLD
        </h1>
        <ul className="flex mt-6">
          <li className="hover:scale-110 transition-all duration-300 ease-in-out border-[4px] border-[#E2E6E9] hover:border-[#f7a15a] ">
            <a href="#" className="flex flex-col items-center text-center ">
              <Image
                src="/icons/images-train.jpg"
                alt=""
                width={150}
                height={150}
                className="border-none"
              />
              <p className="mt-4">Dessert</p>
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
