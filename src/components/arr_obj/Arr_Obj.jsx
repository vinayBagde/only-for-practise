import "./Arr_Obj.css";

export default function Arr_Obj({ features, features2 }) {
  return (
    <>
      <div id="box">
        <h2>
          {features.map((el) => (
            <li>{el}</li>
          ))}
        </h2>
        <h1>{features2.b}</h1>
      </div>
    </>
  );
}
