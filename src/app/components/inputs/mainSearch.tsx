"use client";
import { useParams } from "next/navigation";
import { useSearch } from "@/lib/searchQueryConext";
import { cn } from "@/lib/utils";

export default function MainSearch() {
  const { setSearchQuery, searchQuery } = useSearch();

  const params = useParams();
  const category = params.category as string;
  const location = params.location as string;

  let placeholder;

  switch (true) {
    case category != null:
      placeholder = category;
      break;
    case location != null:
      placeholder = location.replace(/%20/g, " ");
      break;
    default:
      placeholder = "something";
      break;
  }

  return (
    <input
      onChange={(e) => setSearchQuery(e.target.value)}
      className={cn(
        "border rounded-lg bg-sidebar focus:outline-none focus:ring-1",
        "truncate w-[220px] capitalize px-2 p-1 focus:ring-gray-100 pl-3"
      )}
      placeholder={`Search for ${placeholder}...`}
      value={searchQuery || ""}
    />
  );
}
