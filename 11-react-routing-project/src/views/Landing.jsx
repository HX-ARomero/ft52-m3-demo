import React, { useEffect } from "react";
import styles from "../styles/styles.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Landing(props) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 60000);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dragon Ball APP</h1>
      <img
        src="https://qph.cf2.quoracdn.net/main-qimg-bddc3d8428557eac26dc50f57e0de193"
        alt="Dragon Ball APP"
      />
      <br />
      <Link to="/home">
        <span>Ingresar...</span>
      </Link>
    </div>
  );
}
