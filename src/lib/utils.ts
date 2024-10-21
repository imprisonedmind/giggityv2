import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert to a human-readable format for start date
export const processStartDate = (startDateValue: string) => {
  const startDate = new Date(startDateValue);

  // Options for formatting the date
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit", // e.g., 02
    month: "short", // e.g., Jan
    year: "2-digit", // e.g., 24
  };

  // Options for formatting the time
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // e.g., 6
    minute: "numeric", // e.g., 00
    hour12: true, // 12-hour format with AM/PM
  };

  const formattedDate = startDate.toLocaleDateString("en-US", dateOptions);
  const formattedTime = startDate.toLocaleTimeString("en-US", timeOptions);

  return `${formattedDate} / ${formattedTime}`;
};

// Convert to a human-readable format for end date
export const processEndDate = (endDateValue: string) => {
  const endDate = new Date(endDateValue);

  // Options for formatting the date
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit", // e.g., 02
    month: "short", // e.g., Jan
    year: "2-digit", // e.g., 24
  };

  // Options for formatting the time
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // e.g., 6
    minute: "numeric", // e.g., 00
    hour12: true, // 12-hour format with AM/PM
  };

  const formattedDate = endDate.toLocaleDateString("en-US", dateOptions);
  const formattedTime = endDate.toLocaleTimeString("en-US", timeOptions);

  return `${formattedDate} / ${formattedTime}`;
};

// Function to calculate the time until an event
export const timeUntilEvent = (startDate: string, endDate: string) => {
  const now = new Date();
  const eventStartDate = new Date(startDate);
  const eventEndDate = new Date(endDate);

  // Check if event has ended
  if (now > eventEndDate) {
    return "Finished";
  }

  // Check if event is in progress
  if (now >= eventStartDate && now <= eventEndDate) {
    return "In Progress";
  }

  // If we reach here, event hasn't started yet
  const diffInMs = eventStartDate.getTime() - now.getTime();
  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Rough approximation for months
  const years = Math.floor(months / 12); // Rough approximation for years

  // Return years if applicable
  if (years > 0) {
    return `In ${years} Year${years > 1 ? "s" : ""}`;
  }

  // Return months if applicable
  if (months > 0) {
    return `In ${months} Month${months > 1 ? "s" : ""}`;
  }

  // Return days if applicable
  if (days > 0) {
    return `In ${days} Day${days > 1 ? "s" : ""}`;
  }

  // Return hours and minutes if applicable
  if (hours > 0) {
    const remainingMinutes = minutes % 60;
    return `In ${hours} Hour${hours > 1 ? "s" : ""}${
      remainingMinutes > 0
        ? `, ${remainingMinutes} Min${remainingMinutes > 1 ? "s" : ""}`
        : ""
    }`;
  }

  // Return minutes if applicable
  if (minutes > 0) {
    return `In ${minutes} Min${minutes > 1 ? "s" : ""}`;
  }

  // If less than a minute until the event
  return "Starting!";
};

// calculate colours for event chips
export function calcColours(tte: string) {
  switch (true) {
    case tte === "In Progress":
      return "bg-green-50 text-green-500";
    case tte === "Finished":
      return "bg-red-50 text-red-500";
    default:
      return "bg-orange-50 text-orange-500";
  }
}
