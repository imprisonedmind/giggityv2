"use client";
import { FC, useEffect, useState } from "react";
import { CustomEvent } from "@/app/components/events/customEvent";
import { fetchEvents } from "@/app/actions";
import { useDebounce } from "@uidotdev/usehooks";
import { EventsWrapper } from "@/app/components/wrappers/eventsWrapper";
import { useSearch } from "@/lib/searchQueryConext";

interface ClientFetchEventsProps {
  data: any;
  category?: string;
  location?: string;
}

export const ClientFetchEvents: FC<ClientFetchEventsProps> = ({
  data,
  category,
  location,
}) => {
  const { searchQuery } = useSearch();

  const [events, setEvents] = useState(!searchQuery ? data : undefined);

  const fetchData = async () => {
    const data = await fetchEvents({
      name: searchQuery,
      tags: category,
      location: location,
    });
    if (data.events) {
      setEvents(data.events);
    } else setEvents(undefined);
  };

  const debouncedSearchTerm = useDebounce(searchQuery, 300);

  useEffect(() => {
    fetchData();
  }, [debouncedSearchTerm]);

  if (events && events.length <= 0) return <p>No Events</p>;
  return (
    <EventsWrapper>
      {events.map((event: any, index: number) => {
        return <CustomEvent key={index} event={event} />;
      })}
    </EventsWrapper>
  );
};
