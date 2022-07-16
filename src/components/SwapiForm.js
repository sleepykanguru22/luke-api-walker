import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SwapiForm = () => {
  const [category, setcategory] = useState("people");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>
          search:
          <select onChange={(e) => setcategory(e.target.value)}>
            <option value="people">people</option>
            <option value="planets">planet</option>
            <option value="starships">starship</option>
          </select>
          ID:
          <input type="number" onChange={(e) => setId(e.target.value)} />
          <button className="btn btn-primary">Search</button>
        </p>
      </form>
    </div>
  );
};

export default SwapiForm;
