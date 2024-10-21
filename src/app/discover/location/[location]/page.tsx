import { fetchEvents } from "@/app/actions";
import { ClientFetchEvents } from "@/app/components/events/clientFetchEvents";

interface PageProps {
  params: {
    location: string;
  };
}

export default async function Page({ params }: PageProps) {
  const data = await fetchEvents({ location: params.location });

  if (!data.events)
    return <p className={"capitalize"}>No {params.location} Events</p>;

  return <ClientFetchEvents data={data} location={params.location} />;
}
