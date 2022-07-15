import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Home Component</h1>
      <Link to={"/about"}>Go to About </Link>
      <Link to={"/4"}> Four </Link>
      <Link to={"/hello"}> Hello </Link>
    </div>
  );
};
export default Home;
