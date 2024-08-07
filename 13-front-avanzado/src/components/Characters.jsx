import React from "react";
import useFetch from "../hooks/useFetch";

function Characters() {
  const { data, error } = useFetch("character");
  // console.log("data: ", data);
  // console.log("error: ", error);

  return (
    <div>
      <h2>Listado de Personajes</h2>
      <hr />
      {data ? (
        data?.results.map((character, index) => (
          <div key={index}>
            <p>{character.name}</p>
            <img
              style={{ width: "100px" }}
              src={character.image}
              alt={character.name}
            />
          </div>
        ))
      ) : (
        <div>
          <p>{error?.message}</p>
        </div>
      )}
    </div>
  );
}

export default Characters;
