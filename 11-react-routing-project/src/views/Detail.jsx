import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const GETCHARACTERBYID_URL = "https://dragonball-api.com/api/characters/";

export default function Detail() {
  const { id } = useParams(); //* { id: 1 }
  // console.log(id);

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(GETCHARACTERBYID_URL + id)
      .then(({ data }) => data)
      .then((characterById) => setCharacter(characterById))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(
    () => () => {
      setCharacter({});
    },
    []
  );

  return (
    <div className={styles.container}>
      <h2>Detalle</h2>
      <h3>Nombre: {character?.name}</h3>
      <h4>Ki: {character?.ki}</h4>
      <h4>Raza: {character?.race}</h4>

      {character.image ? (
        <img src={character.image} alt={character?.name} />
      ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
    </div>
  );
}
