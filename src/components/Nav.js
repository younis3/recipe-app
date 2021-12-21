import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <h2 className={styles.title}>Recipe App</h2>
      <ul className={styles.navbar}>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <li className={styles.nav}>Explore</li>
        </Link>
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <li className={styles.nav}>Favorites</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
