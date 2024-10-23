"use client";
import { FC, ReactElement } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSearch } from "@/lib/searchQueryConext";

interface SideBarElementProps {
  logo: ReactElement;
  title: string;
}

export const SideBarElement: FC<SideBarElementProps> = ({ logo, title }) => {
  const { setSearchQuery } = useSearch();

  const params = useParams();
  const category = params.category;
  const location = params.location;

  const titleLower = title.toLowerCase();
  const isSelected = category?.includes(titleLower);
  const variant = isSelected ? "secondary" : "ghost";

  let link;

  switch (true) {
    case isSelected && !params.location:
      link = isSelected ? `/` : `/discover/${category}`;
      break;
    case isSelected && params.location != null:
      link = `/discover/location/${location}`;
      break;
    case params.location != null:
      link = `/discover/location/${location}/category/${titleLower}`;
      break;
    default:
      link = `/discover/${titleLower}`;
      break;
  }

  return (
    <Link
      onClick={() => {
        setSearchQuery("");
      }}
      href={link}
      className={"flex relative px-2 w-full"}
    >
      <Button
        variant={variant}
        className={cn("!w-full justify-start text-sidebar-primary")}
      >
        {logo}
        {title}
      </Button>
    </Link>
  );
};
