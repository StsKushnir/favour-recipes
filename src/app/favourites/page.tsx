"use client"
import { useFavouritsContext } from "@/controllers/Favourits/useFavouritsContext";
import Image from "next/image";

const Favourites = () => {
  const { favourites } = useFavouritsContext();

  return (
    <>
      { favourites && favourites.length > 0 ? (

        <Image
          src='/icons/images-train.jpg'
          alt='no favourites'
          width={200}
          height={200}
        />
      ) : (<div></div>)}
    </>
  )
}

export default Favourites;