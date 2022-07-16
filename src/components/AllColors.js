import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllColors = (props) => {
  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const navigate = useNavigate();

  const changeColors = (e) => {
    e.preventDefault();
    // When the user clicks the submit input in the form,
    //we will navigate to the "/results" path
    navigate("/hello/:");
  };

  return (
    <form onSubmit={changeColors}>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <input
        type="text"
        onChange={(e) => setBackgroundColor(e.target.value)}
        value={backgroundColor}
      />
    </form>
  );
};
export default AllColors;
