import "./LotteryTicket.css";
import { useState } from "react";
export default function LotteryTicket() {
  let [num, setNum] = useState(0);
  let [sum, setSum] = useState(0);

  let generateNumber = () => {
    setNum(() => {
      return Math.floor(Math.random() * 899 + 100);
    });

    let temp = 0;
    for(let i=0; i<3; i++) {
      temp += num % 10;
      num = Math.floor(num / 10);
    }

    setSum(temp);
  };
  return (
    <>
      <div id="wonTicket">
        {sum == 15 ? <h1>Lottery' Congratulation, you won!</h1> : null}
      </div>
      <div id="ticket-box">
        <h1 style={{ padding: "0 10px 0 10px" }}>Lottery</h1>
        <h3>Lottery Ticket = {num}</h3>
        <h5>Sum : {sum}</h5>
        <button onClick={generateNumber}>Get new ticket</button>
      </div>
    </>
  );
}
