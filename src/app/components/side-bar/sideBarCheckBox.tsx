"use client";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { buttonVariants } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

interface SideBarCheckBoxProps {
  title: string;
}

export const SideBarCheckBox: FC<SideBarCheckBoxProps> = ({ title }) => {
  const { push } = useRouter();
  const params = useParams();
  const category = params.category as string;
  const location = params.location as string;

  const titleMorph = title.toLowerCase();

  const handleButtonClick = () => {
    let url;

    switch (true) {
      case isSelected:
        url = category ? `/discover/${category}` : "/";
        break;
      case category != null:
        url = `/discover/location/${titleMorph}/category/${category}`;
        break;
      default:
        url = `/discover/location/${titleMorph}`;
        break;
    }

    push(url);
  };

  const isSelected = location
    ? location.replace(/%20/g, " ").includes(titleMorph)
    : false;

  return (
    <div role={"button"} tabIndex={0} className={"flex w-full px-2"}>
      <div
        onClick={handleButtonClick}
        className={cn(
          buttonVariants({ variant: isSelected ? "secondary" : "ghost" }),
          "w-full justify-start cursor-pointer"
        )}
      >
        <Checkbox checked={isSelected} />
        {title}
      </div>
    </div>
  );
};
