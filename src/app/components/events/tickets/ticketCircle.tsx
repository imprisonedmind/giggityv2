import { FC } from "react";

interface TicketCircleProps {
  left?: boolean;
}

export const TicketCircle: FC<TicketCircleProps> = ({ left }) => {
  return (
    <div
      className={`${left ? "-left-2.5" : "-right-2.5"}
				absolute top-1/2  m-auto size-5 overflow-hidden rounded-full bg-card 
				-translate-y-1/2
			`}
    >
      <div
        className={`
      	${left ? "ml-auto" : "mr-auto"} h-full  w-[53%] bg-neutral-200 rotate-180
			`}
      />
      <div
        className={`
        	absolute left-1/2 top-1/2 z-10 flex size-11/12 -translate-x-1/2 
        	-translate-y-1/2 transform items-center justify-center rounded-full bg-card
			 `}
      />
    </div>
  );
};
