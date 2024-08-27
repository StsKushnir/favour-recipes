"use client" 
import { useAppSelector } from "@/store/hooks"; 
import Image from "next/image";
import { useParams } from "next/navigation"; 

const Recipe = () => { 
  const params = useParams(); 
  const name = params.name; 
  const meals = useAppSelector((state) => state.meals.meals); 
  const currMeal = meals.find(meal => meal.strMeal === name); 

  return (
<div className="flex flex-wrap justify-center p-20">
    <div className="">
      {currMeal && <Image
        src={currMeal.strMealThumb}
        alt="dish-name"
        width={180}
        height={180}
        className="mb-4 border-[4px] border-[#E2E6E9]"
        priority
      />}
      <ul className="gap-x-4">
        <li className="flex items-center justify-center mb-4">
          <p className="font-semibold text-lg"></p>
        </li>
        <li className="flex justify-between">
          <p className="font-semibold text-base">Category:</p>
          <p className="font-medium text-sm">{currMeal?.strCategory}</p>
        </li>
        <li className="flex justify-between">
          <p className="font-semibold text-base">Cuisine:</p>
          <p className="font-medium text-sm">{currMeal?.strArea}</p>
        </li>
      </ul>
    </div>
    </div>
  );
};
export default Recipe;
