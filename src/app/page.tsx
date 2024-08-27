import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6  bg-[#e9dbb4]">
      <div className="flex flex-row items-center justify-between p-6 border-[#E2E6E9] bg-white">
        <a href="">
          <Image
            src="/icons/favicon-icon.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </a>
        <button className="bg-red">
          Вибрані
        </button>
      </div>
    </main>
  );
}
