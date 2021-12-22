import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Nav.module.css";

const Nav = ({ favorites }) => {

  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    setFavCount(favorites.length)
  }, [favorites])


  return (
    <div className={styles.navContainer}>
      <div className={styles.title}>
        <h3>Recipe App</h3>
        <h6>Developed by Y3.</h6>
      </div>
      <ul className={styles.navbar}>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <li className={`${styles.nav} ${useLocation().pathname === '/explore' ? styles.clickedNav : ''}`}>Explore</li>
        </Link>
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <li className={`${styles.nav} ${useLocation().pathname === '/favorites' ? styles.clickedNav : ''}`}>{`Favorites (${favCount})`}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
