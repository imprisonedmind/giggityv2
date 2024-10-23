import { EventsWrapper } from "@/app/components/wrappers/eventsWrapper";
import { SkeletonCard } from "@/app/components/skeleton/skeletonCard";

export default function SkeletonWrapper() {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <EventsWrapper>
      {items.map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </EventsWrapper>
  );
}
