import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  let click = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };
  return (
    <>
      <div>
        <h2>count : {count}</h2>
        <button onClick={click}>click</button>
      </div>
    </>
  );
}
