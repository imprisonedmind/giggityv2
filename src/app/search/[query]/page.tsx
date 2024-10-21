import { fetchEvents } from "@/app/actions";
import { CustomEvent } from "@/app/components/events/customEvent";

interface ParamProps {
  params: {
    query: string;
  };
}

export default async function Page({ params }: ParamProps) {
  const data = await fetchEvents({ name: params.query });

  if (!data.events)
    return <p className={"capitalize"}>No {params.query} Events</p>;

  return (
    <section className="h-[96svh] overflow-y-scroll grid grid-cols-3 gap-4 p-4 auto-rows-min">
      {data.events.map((event: any, index: number) => {
        return <CustomEvent key={index} event={event} />;
      })}
    </section>
  );
}
