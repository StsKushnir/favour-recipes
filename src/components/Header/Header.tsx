import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  
  return (
    <header className="flex flex-row items-center justify-between mt-6 px-8 py-4 bg-white ">
      <Link href="/">
        <Image
          src="/icons/favicon-icon.png"
          alt="Logo"
          width={80}
          height={80}
        />
      </Link>

      <Link href='/favourites' className="bg-[#ca3123] p-3 text-[#E2E6E9] flex rounded-full gap-x-1">
        <p>Favorites: </p>
        <span>0</span>
      </Link>
    </header>
  );
}
