import "./Conditional.css";
export default function Conditonal({ user, marks }) {
  let styles = {
    color: "blue",
    backgroundColor: "yellow",
  };
  return (
    <>
      <div id="div" style={marks >= 80 ? styles : null}>
        <h2>user: {user}</h2>
        <h3>marks: {marks}</h3>
        {marks >= 80 ? <h3>Grade: A </h3> : null}
      </div>
    </>
  );
}
