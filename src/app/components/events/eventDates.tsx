import { FC } from "react";
import { cn, processEndDate, processStartDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface EventDatesProps {
  startDate?: any;
  endDate?: any;
}

export const EventDates: FC<EventDatesProps> = ({ startDate, endDate }) => {
  return (
    <Card className={cn("p-0 flex flex-row gap-1 items-center")}>
      <p className={"text-xs p-1 border-r"}>{startDate ? "START" : "END"}</p>
      <p className={"text-sm pr-2 p-1"}>
        {startDate && processStartDate(startDate)}
        {endDate && processEndDate(endDate)}
      </p>
    </Card>
  );
};
