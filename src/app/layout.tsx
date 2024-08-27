import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";
import Header from "@/components/Header/Header";
import { FavouritsContextProvider } from "@/controllers/Favourits/FavouritsContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Favour recipes",
  description: "Best dishes for you family",
  icons: {
    icon: "/icons/favicon-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex min-h-screen flex-col bg-[#e9dbb4]"}>
      <FavouritsContextProvider> 
        <ReduxProvider> 
          <Header /> 
            {children} 
        </ReduxProvider> 
      </FavouritsContextProvider>

      </body>
    </html>
  );
}
