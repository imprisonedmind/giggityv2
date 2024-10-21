import { fetchEvent } from "@/app/actions";
import { SingleEventCard } from "@/app/components/events/singleEventCard";
import { Ticket } from "@/app/components/events/tickets/ticket";

interface ParamProps {
  params: {
    category: string;
    uid: string;
  };
}

export default async function Page({ params }: ParamProps) {
  const data = await fetchEvent({ uid: params.uid });

  if (!data.event)
    return <p className={"capitalize"}>No {params.uid} Events</p>;

  return (
    <div className="flex flex-col h-[96svh] gap-4 overflow-y-scroll max-w-[1200px] mx-auto">
      <div className={"flex flex-col gap-4 p-4"}>
        <SingleEventCard event={data.event} />

        <div
          className={"flex flex-row gap-2 overflow-x-scroll overflow-y-none"}
        >
          {data.event.tickets
            .sort((a: any, b: any) => a.price - b.price)
            .map((ticket: any, index: number) => (
              <Ticket ticket={ticket} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
