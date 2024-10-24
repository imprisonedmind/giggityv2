"use client";
import { FC } from "react";
import { calcColours, cn, timeUntilEvent } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { EventCardChip } from "@/app/components/events/eventCardChip";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { EventDates } from "@/app/components/events/eventDates";

interface SingleEventCardProps {
  event: any;
}

export const SingleEventCard: FC<SingleEventCardProps> = ({ event }) => {
  const tte = timeUntilEvent(event.startDate, event.endDate);

  return (
    <Card
      className={cn(
        "flex flex-row relative overflow-clip justify-between gap-12 rounded-2xl !w-full"
      )}
    >
      <div className={"flex flex-col justify-between p-4 gap-8 w-2/3"}>
        <div className={"flex flex-col gap-2"}>
          <CardTitle className={cn("text-xl")}>{event.name}</CardTitle>
          <CardDescription className={cn("text-md h-max w-full")}>
            {event.openApiDescription || event.description}
          </CardDescription>
        </div>

        <div className={"flex flex-col gap-2"}>
          <div className={"flex flex-wrap gap-2 items-center"}>
            <EventCardChip
              url={event.url}
              title={"Original Website"}
              icon={<IoGlobeOutline />}
            />
            <EventCardChip
              className={calcColours(tte)}
              title={tte}
              icon={<FaRegClock />}
            />
          </div>

          <div className={"flex flex-wrap gap-2 items-center"}>
            <EventDates startDate={event.startDate} />
            <EventDates endDate={event.endDate} />
          </div>
        </div>
      </div>

      <Image
        width={200}
        height={200}
        src={`https:${event.imageUrl}`}
        alt={event.seoMetadata?.description ?? event.description}
        className={"relative h-full w-1/3 min-h-60 object-cover flex-shrink-0"}
      />
    </Card>
  );
};
