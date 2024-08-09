import { useState } from "react";
export default function LikeButton() {
  let init = function () {
    let temp = 0;
    return temp;
  };
  let [isLiked, setIsLiked] = useState(false);
  let [count, setcount] = useState(init);
  let toggleLike = () => {
    setIsLiked((isLiked) => {
      return !isLiked;
    });
    setcount((currentValue) => {
      return currentValue + 1;
    });
  };
  let styles = { color: "blue" };
  return (
    <>
      <h1>State In React</h1>
      <div>
        <h2>Count: {count}</h2>
        <p onClick={toggleLike}>
          {isLiked ? (
            <i className="fa-solid fa-thumbs-up" style={styles}></i>
          ) : (
            <i className="fa-regular fa-thumbs-up"></i>
          )}
        </p>
      </div>
    </>
  );
}
