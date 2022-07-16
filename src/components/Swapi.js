import React, { useState, useEffect } from "react";
import axios from "axios";
const Swapi = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    axios.get("http https://swapi.dev/api/people/").then((response) => {
      setPokemon(response.data.results);
    });
  }, [fetch]);

  return (
    <>
      <button onClick={(e) => setFetch(true)}>Fetch!</button>
      <ul>
        {fetch ? (
          pokemon.map((item, i) => <li key={i}>{item.name}</li>)
        ) : (
          <li></li>
        )}
      </ul>
    </>
  );
};

export default Swapi;
