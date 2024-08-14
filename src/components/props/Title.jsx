import "./Title.css";
export default function Title({ title, price, idx }) {
  let discription = [
    "this phone is awesome",
    "durable laptop is here",
    "fastest pen on earth",
  ];
  return (
    <>
      <div id="box">
        <h2>title: {title}</h2>
        <p>{discription[idx]}</p>
        <h3>Price: {price}</h3>
      </div>
    </>
  );
}
