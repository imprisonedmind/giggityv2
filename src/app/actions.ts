"use server";

import { config } from "@/lib/config";

const apiURL = config.apiUrl;

interface fetchEventsProps {
  tags?: string;
  name?: string;
  location?: string;
  page?: string;
}

export async function fetchEvents({
  tags,
  name,
  location,
  page,
}: fetchEventsProps = {}) {
  const queryParams = new URLSearchParams();

  if (page) {
    queryParams.append("page", page);
  }
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
