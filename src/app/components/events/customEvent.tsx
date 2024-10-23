"use client";
import { FC } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { calcColours, cn, timeUntilEvent } from "@/lib/utils";
import { EventCardChip } from "@/app/components/events/eventCardChip";

interface CustomEventProps {
  event: any;
  category?: any;
}

export const CustomEvent: FC<CustomEventProps> = ({ event, category }) => {
  const queryParams = category
    ? `${category}/${event._id}`
    : `event/${event._id}`;

  const tte = timeUntilEvent(event.startDate, event.endDate);

  return (
    <Link href={`/discover/${queryParams}`}>
      <Card
        className={cn(
          "flex flex-col overflow-clip relative justify-end cursor-pointer h-full",
          "rounded-xl"
        )}
      >
        <div className={"flex w-full relative h-60 flex-shrink-0"}>
          <Image
            priority={true}
            fill={true}
            sizes={"20vw"}
            src={`https:${event.imageUrl}`}
            alt={event.name}
            className={"relative h-full w-auto object-cover bg-gray-50"}
          />
        </div>

        <CardHeader className={"p-2 gap-1 h-full flex-grow justify-between"}>
          <div className={"flex flex-col gap-1"}>
            <CardTitle className={"line-clamp-1 text-lg leading-6"}>
              {event.name}
            </CardTitle>
            <CardDescription className={cn("line-clamp-3 !mt-0")}>
              {event.openApiDescription || event.description}
            </CardDescription>
          </div>

          <div className={"flex flex-row gap-1 overflow-clip"}>
            <EventCardChip
              className={`${calcColours(tte)} text-xs `}
              title={tte}
            />
            {event.tickets
              .sort((a: any, b: any) => a.price - b.price)
              .map((ticket: any, index: number) => {
                if (ticket.price < 1) {
                  return (
                    <EventCardChip
                      key={index}
                      title={"Free"}
                      className={"bg-pink-50 text-pink-500 text-xs"}
                    />
                  );
                }
                return (
                  <EventCardChip
                    key={index}
                    className={"text-xs"}
                    title={`R${ticket.price}`}
                  />
                );
              })}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
