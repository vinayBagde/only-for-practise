import { useState } from "react";
export default function LikeButton() {
  let [count, setCount] = useState(0);
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setCount((currentValue) => {
      return currentValue + 1;
    });
    setIsLiked((isLiked) => {
      return !isLiked;
    });
  };
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </button>
    </>
  );
}
