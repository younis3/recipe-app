import React from "react";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navbar}>
        <li className={styles.nav}>Explore</li>
        <li className={styles.nav}>Favorites</li>
      </ul>
    </div>
  );
};

export default Nav;
