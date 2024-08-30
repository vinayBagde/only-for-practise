import "./Lottery.css";
import { useState } from "react";
export default function () {
  let [ticket, setTicket] = useState([0, 0, 0]);
  return (
    <>
      <div>
        <h1>Lottery Game!</h1>
        <div className="ticket">
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </div>
      </div>
    </>
  );
}
