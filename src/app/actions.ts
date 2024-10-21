"use server";

const apiURL = process.env.API_URL;

interface fetchEventsProps {
  tags?: string;
  name?: string;
  location?: string;
}

export async function fetchEvents({
  tags,
  name,
  location,
}: fetchEventsProps = {}) {
  const queryParams = new URLSearchParams();

  if (tags && tags.length > 0) {
    queryParams.append("tags", tags);
  }
  if (name) {
    queryParams.append("name", name);
  }
  if (location) {
    queryParams.append("location", location);
  }

  const res = await fetch(`${apiURL}/events?${queryParams.toString()}`, {
    method: "GET",
  });

  return await res.json();
}

export async function fetchEvent({ uid }: { uid: string }) {
  const queryParams = new URLSearchParams({ uid: uid });

  const res = await fetch(`${apiURL}/event?${queryParams.toString()}`, {
    method: "GET",
  });

  return await res.json();
}
