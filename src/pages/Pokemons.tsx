import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BulbasurPic from "../assets/bulbasaur.gif";
import styles from "./pokemons.module.css";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          <Link className={styles.listItem} to="/">
            <img className={styles.listItemIcon} src={BulbasurPic} alt="bulbasaur" />
            <div className={styles.listItemText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>

          <Link className={styles.listItem} to="/">
            <img className={styles.listItemIcon} src={BulbasurPic} alt="bulbasaur" />
            <div className={styles.listItemText}>
              <span>Ivisur</span>
              <span>002</span>
            </div>
          </Link>

          <Link className={styles.listItem} to="/">
            <img className={styles.listItemIcon} src={BulbasurPic} alt="bulbasaur" />
            <div className={styles.listItemText}>
              <span>Venosaur</span>
              <span>003</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
