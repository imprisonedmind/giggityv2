import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PaginationButtonProps {
  callback: () => void;
  disabled: boolean;
  title: string;
}

export const PaginationButton: FC<PaginationButtonProps> = ({
  callback,
  disabled,
  title,
}) => {
  return (
    <Button
      onClick={callback}
      disabled={disabled}
      variant={disabled ? "ghost" : "default"}
      className={cn(
        "text-xs p-1 px-3 h-fit",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {title}
    </Button>
  );
};
