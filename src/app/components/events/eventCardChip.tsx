import { FC, ReactNode } from "react";
import Link from "next/link";

interface EventCardChipProps {
  url?: string;
  icon?: ReactNode;
  title?: string;
  className?: string;
}

export const EventCardChip: FC<EventCardChipProps> = ({
  url,
  icon,
  title,
  className,
}) => {
  if (!url)
    return (
      <div
        className={`${className}
          bg-blue-50 text-blue-500 w-fit p-1 px-2 rounded-md text-sm items-center flex 
          gap-1 
        `}
      >
        {icon && icon}
        <p className={"flex flex-nowrap flex-shrink-0 truncate"}>{title}</p>
      </div>
    );
  return (
    <Link
      href={url}
      target={"_blank"}
      className={`
        bg-blue-50 text-blue-500 w-fit p-1 px-2 rounded-md text-sm items-center flex gap-1 
        underline-offset-2 hover:underline
      `}
    >
      {icon && icon}
      <p>{title}</p>
    </Link>
  );
};
