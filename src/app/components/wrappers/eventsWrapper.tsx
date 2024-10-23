import { FC, ReactNode } from "react";

interface EventsWrapperProps {
  children: ReactNode;
}

export const EventsWrapper: FC<EventsWrapperProps> = ({ children }) => {
  return (
    <section
      className={`
        h-full overflow-y-scroll grid grid-cols-1 gap-4 p-4 auto-rows-min 
        lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 3xl:grid-cols-6
        w-full
      `}
    >
      {children}
    </section>
  );
};
