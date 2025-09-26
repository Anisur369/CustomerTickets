export default function Card({ticket, handlerIncrement}) {

  const handlerCard = () => {
    const { title } = ticket;
    handlerIncrement(title);
  }
  return (
      <div onClick={handlerCard} className="card w-full bg-base-100 card-md shadow-sm cursor-pointer">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{ticket.title}</h2>

            {ticket.status === "Open" && 
              <div className="bg-green-200 rounded-full px-4 py-2 flex items-center justify-center">
                <span className="status bg-[red] w-3 h-3"></span>
                <span className="text-md font-semibold ml-1">{ticket.status}</span>
              </div>
            }

            {ticket.status === "In Progress" && 
              <div className="bg-yellow-200 rounded-full px-4 py-2 flex items-center justify-center">
                <div className="inline-grid *:[grid-area:1/1]">
                  <div className="status status-error animate-ping"></div>
                  <div className="status status-error  w-2 h-2"></div>
                </div>
                <span className="text-md font-semibold ml-1">{ticket.status}</span>
              </div>
            }

            {ticket.status === "Resolved" && <span className="badge badge-success">{ticket.status}</span>}

          </div>
          <p>{ticket.description}</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>#{ticket.id}</span>
              {ticket.priority === "Medium Priority"?
                <span className="text-yellow-400">{ticket.priority}</span>
                :
                <span>{ticket.priority}</span>
              }              
            </div>
            <div className="flex gap-2">
              <span>{ticket.customer}</span>
              <span><i className="fa-regular fa-calendar"></i> {ticket.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
  );
}