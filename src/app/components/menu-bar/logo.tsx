"use client";
import Link from "next/link";
import { useSearch } from "@/lib/searchQueryConext";

export default function Logo() {
  const { setSearchQuery } = useSearch();

  return (
    <Link
      onClick={() => setSearchQuery("")}
      href={"/"}
      className={"font-bold text-sm"}
    >
      Giggity
    </Link>
  );
}
