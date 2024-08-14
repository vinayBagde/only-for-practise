import { useState } from "react";
export default function Counter() {
  let init = () => {
    return 0;
  };
  let [count, setCount] = useState(init);

  let click = () => {
    setCount((currentValue) => {
      return currentValue + 1;
    });
  };
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={click}>increase count</button>
    </>
  );
}
