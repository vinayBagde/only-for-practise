import "./Form.css";
export default function Form() {
  let submitted = (event) => {
    event.preventDefault();
    console.log("form was submitted");
  };
  return (
    <>
      <div id="form">
        <form action="./action" onSubmit={submitted}>
          <input type="text" placeholder="user name" />
          <br />
          <button>click</button>
        </form>
      </div>
    </>
  );
}
