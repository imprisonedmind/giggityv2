"use client";
import giggity from "@/assets/images/logo.svg";
import Link from "next/link";
import { useSearch } from "@/lib/searchQueryConext";
import Image from "next/image";
import { Gochi_Hand } from "next/font/google";
import { cn } from "@/lib/utils";

const reenie = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  const { setSearchQuery } = useSearch();

  return (
    <Link
      onClick={() => setSearchQuery("")}
      href={"/"}
      className={cn(
        "flex-col font-bold text-sm flex items-center px-4 gap-2 w-fit m-auto"
      )}
    >
      <Image
        src={giggity}
        height={20}
        width={20}
        alt={"Giggity.co.za Logo"}
        className={"size-16"}
      />
      <div
        className={
          "mt-1 h-fit text-xl font-thin tracking-[3px] text-sidebar-primary "
        }
      >
        <h1 className={reenie.className}>Giggity</h1>
      </div>
    </Link>
  );
}
