import { fetchEvents } from "@/app/actions";
import { ClientFetchEvents } from "@/app/components/events/clientFetchEvents";

export default async function Home() {
  const data = await fetchEvents();

  return (
    <main>
      <ClientFetchEvents data={data.events} />
    </main>
  );
}
