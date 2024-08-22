import "./LudoBoard.css";
export default function LudoBoard() {
  return (
    <>
      <h3>Blue : {}</h3>
      <button style={{ backgroundColor: "blue" }}>+1</button>
      <h3>Yellow : {}</h3>
      <button style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
      <h3>Green : {} </h3>
      <button style={{ backgroundColor: "green" }}>+1</button>
      <h3>red : {} </h3>
      <button style={{ backgroundColor: "red" }}>+1</button>
    </>
  );
}
