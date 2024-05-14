import React from "react";
import Pokedex from "../assets/pokedex.png";
import styles from "./loadingScreen.module.css"

const LoadingScreen = () => {
  return (
    <nav className={styles.loadingScreen}>
      <img className={styles.loadingScreenIcon} src={Pokedex} alt="Pokedex" />
    </nav>
  );
};

export default LoadingScreen;
