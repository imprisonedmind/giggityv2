import { fetchEvents } from "@/app/actions";
import { ClientFetchEvents } from "@/app/components/events/clientFetchEvents";

interface ParamProps {
  params: {
    category?: string;
    location?: string;
  };
}

export default async function CategoryPage({ params }: ParamProps) {
  const data = await fetchEvents({
    tags: params.category,
    location: params.location,
  });

  if (!data.events)
    return <p className={"capitalize"}>No {params.category} Events</p>;

  return (
    <ClientFetchEvents
      data={data.events}
      category={params.category}
      location={params.location}
    />
  );
}
