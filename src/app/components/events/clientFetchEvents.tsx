"use client";
import { FC, useEffect, useState } from "react";
import { CustomEvent } from "@/app/components/events/customEvent";
import { fetchEvents } from "@/app/actions";
import { useDebounce } from "@uidotdev/usehooks";
import { EventsWrapper } from "@/app/components/wrappers/eventsWrapper";
import { useSearch } from "@/lib/searchQueryConext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  const [page, setPage] = useState<number>(data.currentPage);
  const [totalPages, setTotalPages] = useState<number>(data.totalPages);
  const [totalRecords, setTotalRecords] = useState<number>(data.records);
  const [currentRecords, setCurrentRecords] = useState<number>(
    data.currentRecords
  );

  // TODO: just use data and then data.events, we should trust the server for counts
  const [events, setEvents] = useState(!searchQuery ? data.events : undefined);

  const fetchData = async () => {
    const data = await fetchEvents({
      name: searchQuery,
      tags: category,
      location: location,
      page: page.toString(),
    });
    if (data.events) {
      setEvents(data.events);
      setTotalPages(data.totalPages);
      setTotalRecords(data.records);
      setCurrentRecords(data.currentRecords);
    } else setEvents(undefined);
  };

  const debouncedSearchTerm = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchData();
    } else {
      setEvents(data.events);
      setTotalPages(data.totalPages);
      setTotalRecords(data.records);
      setCurrentRecords(data.currentRecords);
    }
  }, [debouncedSearchTerm]);

  const nextPage = async () => {
    if (page >= totalPages) return;
    const newPage = page + 1;
    setPage(newPage);
    const data = await fetchEvents({
      name: searchQuery,
      tags: category,
      location: location,
      page: newPage.toString(),
    });
    if (data.events) {
      setEvents(data.events);
      setTotalPages(data.totalPages);
      setTotalRecords(data.records);
      setCurrentRecords(data.currentRecords);
    } else {
      setEvents(undefined);
    }
  };

  const prevPage = async () => {
    if (page <= 1) return;
    const newPage = page - 1;
    setPage(newPage);
    const data = await fetchEvents({
      name: searchQuery,
      tags: category,
      location: location,
      page: newPage.toString(),
    });
    if (data.events) {
      setEvents(data.events);
      setTotalPages(data.totalPages);
      setTotalRecords(data.records);
      setCurrentRecords(data.currentRecords);
    } else {
      setEvents(undefined);
    }
  };

  if (events && events.length <= 0) return <p>No Events</p>;
  return (
    <div className={"flex flex-col justify-between"}>
      <EventsWrapper>
        {events?.map((event: any, index: number) => {
          return <CustomEvent key={index} event={event} />;
        })}
      </EventsWrapper>
      <div
        className={
          "flex flex-row justify-between border-t px-4 p-2 items-center"
        }
      >
        <p
          className={"text-xs"}
        >{`Showing ${currentRecords} of ${totalRecords} Results`}</p>

        <div className={"flex flex-row items-center gap-4"}>
          <p className={"text-xs"}>{`Page ${page} of ${totalPages}`}</p>
          <div className={"flex flex-row gap-1"}>
            <Button
              onClick={prevPage}
              disabled={page <= 1}
              className={cn(
                "text-xs p-1 px-2 h-fit",
                page <= 1 && "opacity-50 cursor-not-allowed"
              )}
            >
              Prev
            </Button>
            <Button
              onClick={nextPage}
              disabled={page >= totalPages}
              className={cn(
                "text-xs p-1 px-2 h-fit",
                page >= totalPages && "opacity-50 cursor-not-allowed"
              )}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
