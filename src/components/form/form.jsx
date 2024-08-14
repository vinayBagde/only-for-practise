export default function Form() {
  let formSubmitted = (event) => {
    event.preventDefault();
    console.log("form was submitted");
  };

  let styles = {
    border: "1px solid white",
    borderRadius: "15px",
    backgroundColor: "yellow",
  };
  return (
    <>
      <h1>State In React</h1>
      <div style={styles}>
        <form action="./action" onSubmit={formSubmitted}>
          <input type="text" placeholder="enter name" />
          <br />
          <br />
          <button style={{ backgroundColor: "blue" }}>submit</button>
        </form>
      </div>
    </>
  );
}
