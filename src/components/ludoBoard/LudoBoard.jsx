import { useState } from "react";
import "./LudoBoard.css";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMoves((previousValue) => {
      return { ...previousValue, blue: previousValue.blue + 1 };
    });
  };

  let updateYellow = () => {
    setMoves((previousValue) => {
      return { ...previousValue, yellow: previousValue.yellow + 1 };
    });
  };

  let updateGreen = () => {
    setMoves((previousValue) => {
      return { ...previousValue, green: previousValue.green + 1 };
    });
  };

  let updateRed = () => {
    setMoves((previousValue) => {
      return { ...previousValue, red: previousValue.red + 1 };
    });
  };

  let btn = {
    backgroundColor: "black",
  };
  return (
    <>
      <div id="game">
        <div className="board">
          <div id="blue"></div>
          <h3>Blue : {moves.blue}</h3>
          <button onClick={updateBlue} class="btn">
            +1
          </button>
        </div>
        <div className="board">
          <div id="yellow"></div>
          <h3>Yellow : {moves.yellow}</h3>
          <button class="btn" onClick={updateYellow}>
            +1
          </button>
        </div>
        <div className="board">
          <div id="green"></div>
          <h3>Green : {moves.green} </h3>
          <button onClick={updateGreen} class="btn">
            +1
          </button>
        </div>
        <div className="board">
          <div id="red"></div>
          <h3>red : {moves.red} </h3>
          <button onClick={updateRed} class="btn">
            +1
          </button>
        </div>
      </div>
    </>
  );
}
