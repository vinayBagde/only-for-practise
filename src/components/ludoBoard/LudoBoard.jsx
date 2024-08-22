import {useState} from "react";
import "./LudoBoard.css";
export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0})

    let updateBlue = () => {
        setMoves((previousValue) => {
            return {...previousValue, blue: previousValue.blue + 1}
        });
    }

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
  return (
    <>
      <h3>Blue : {moves.blue}</h3>
      <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
        +1
      </button>
      <h3>Yellow : {moves.yellow}</h3>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={updateYellow}
      >
        +1
      </button>
      <h3>Green : {moves.green} </h3>
      <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
        +1
      </button>
      <h3>red : {moves.red} </h3>
      <button style={{ backgroundColor: "red" }} onClick={updateRed}>
        +1
      </button>
    </>
  );
}
