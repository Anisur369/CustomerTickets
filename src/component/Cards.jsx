// import { use } from "react";
import Card from "./Card";

export default function Cards({ticketsData, handlerIncrement}) {
  // const tickets = use(ticketsData);
  const tickets = ticketsData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} handlerIncrement={handlerIncrement} />
      ))}
    </div>
  );
}