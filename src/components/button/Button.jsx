export default function Button() {
  let clicked = () => {
    console.log("button was clicked");
  };

  function hover() {
    console.log("button was hoverd");
  }

  let dblClick = function () {
    console.log("button pressed");
  };

  return (
    <>
      <button onClick={clicked}>click</button>
      <br />
      <button onMouseEnter={hover}>click me</button>
      <br />
      <button onDoubleClick={dblClick}>dubble click</button>
    </>
  );
}
