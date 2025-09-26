import Cards from "./Cards";
// import { Suspense } from "react";
import { useEffect, useState } from 'react';
// const fetchTickets = async () => {
//   const res = await fetch('../../public/tickets.json');
//   const data = await res.json();
//   return data;
// };

export default function Tickets({handlerIncrement, handlerDecrement, tasks, resolved, resolvedDecrement}) {
  // const ticketPromise = fetchTickets();
  const [allTickets, setAllTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch('/tickets.json'); // Correct path
      const data = await res.json();
      setAllTickets(data);
    };

    fetchTickets();
  }, []);
  const handleTickets = (task, index) => {
    // remove allTickets from single card
    // const removed = allTickets.splice(index, 1);
    // setAllTickets([...allTickets], removed);
    // handlerDecrement(task, index);
    allTickets.filter((taskValue,index2) => {
      if(taskValue.title === task){
        const removed = allTickets.splice(index2, 1);
        setAllTickets([...allTickets], removed);
      }
    });
    handlerDecrement(task, index);
  };


  return (
    <div className="bg-gray-100">
      <div className="w-full sm:w-[1260px] mx-auto p-2 flex flex-col-reverse sm:flex-row sm:justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold">Customer Tickets</h2>
          <Cards ticketsData={allTickets} handlerIncrement={handlerIncrement} />
        </div>

        <div className="w-full sm:w-[500px]">
          <div>
            <h2 className="text-2xl font-bold">Task Status</h2>
            <div>
              {tasks[0] ? (
                tasks.map((task, index) => (
                  <div className="mt-2 bg-white rounded-lg p-2" key={index}>
                    <h3 className="text-lg font-semibold mb-2">{task}</h3>
                    <button onClick={() => handleTickets(task, index)} className="btn btn-primary bg-green-600 rounded-lg w-full border-0">Complete</button>
                  </div>
                ))
              ) : (
                <p>Select a ticket to add to Task Status</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Resolved Task</h2>
            {resolved[0] ? (
              resolved.map((task, index) => (
                <div className="mt-2 bg-white rounded-lg p-2" key={index}>
                  <h3 className="text-lg font-semibold mb-2">{task}</h3>
                  <div className="flex justify-between items-center">
                    <p><i className="fa-solid fa-check"></i> Completed</p>
                    <button onClick={()=>resolvedDecrement(task, index)} className="btn btn-primary bg-red-600 rounded-lg border-0">Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No resolved task yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}






          // <Suspense fallback={<p>Loading...</p>}>
          //   <Cards ticketsData={allTickets} handlerIncrement={handlerIncrement} />
          // </Suspense>