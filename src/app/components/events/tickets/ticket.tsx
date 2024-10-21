import { FC } from "react";
import { CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import TicketSeparator from "@/app/components/events/tickets/ticketSeparator";
import { TicketCircle } from "@/app/components/events/tickets/ticketCircle";

interface TicketProps {
  ticket: any;
}

export const Ticket: FC<TicketProps> = ({ ticket }) => {
  return (
    <div
      className={`
        relative bg-white h-24 min-w-[250px] max-w-[380px] rounded-2xl border
        flex-shrink-0
      `}
    >
      <div className={"px-5 py-2 flex justify-between flex-col h-full gap-4"}>
        <CardTitle className={cn("flex text-sm leading-4 h-1/2 items-center")}>
          {ticket.name}
        </CardTitle>
        {ticket.price > 0 && (
          <p className={"h-1/2 flex items-center"}>{`R ${ticket.price}`}</p>
        )}
        {ticket.price <= 0 && <p className={"h-1/2 flex items-center"}>FREE</p>}
      </div>

      <TicketSeparator />

      <TicketCircle left={true} />
      <TicketCircle />
    </div>
  );
};
