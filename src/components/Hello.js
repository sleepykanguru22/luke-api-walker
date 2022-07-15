import { Link } from "react-router-dom";

const Hello = (props) => {
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", color: "red" }}>Hello</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};
export default Hello;
