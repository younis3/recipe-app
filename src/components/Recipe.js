import React, { useEffect, useState } from "react";
import styles from "../styles/Recipe.module.css";

const Recipe = ({ title, calories, ingredients, imgSRC, link, favorites, setFavorites }) => {

  const [heart, setHeart] = useState(false);

  useEffect(() => {
    //take care of the heart icon toggle (trigger on every change on fav list add/remove)
    let x = false;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].link === link) {
        x = true;
        setHeart(true);
        break;
      }
    }
    if (!x) {
      setHeart(false);
    }
  }, [favorites])


  const AddFavHandler = () => {
    let fav = { title: title, calories: calories, ingredients: ingredients, imgSRC: imgSRC, link: link };
    for (let i = favorites.length - 1; i >= 0; i--) {
      if (favorites[i].link === fav.link) {     // if already favorited, remove it
        // favorites.splice(i, 1);
        setFavorites(favorites.filter((el) => el.link !== fav.link));   //this method preffered since both filter and splice uses O(N)
        return;
      }
    }
    //  if not favorited, add it to favorites list
    setFavorites([...favorites, fav]);
  }


  return (
    <div className={styles["recipe"]}>
      <div className={styles.titleContainer}>
        <div className={styles.heart} onClick={AddFavHandler}>
          {!heart && <i className="far fa-heart"></i>}
          {heart && <i className={`fas fa-heart ${styles.heartOn}`}></i>}
        </div>
        <h2 className={styles["title"]}>{title}</h2>
      </div>
      <p className={styles["calories"]}>Total Calories: {calories}</p>
      <img className={styles["img"]} src={imgSRC} alt="" />
      <ul className={styles["ingredients"]}>
        <span className={styles["ingredient-title"]}>Ingredients:</span>
        {ingredients.map((ingredient) => (
          <li key={Math.random() * 1000}>{ingredient.text}</li>
        ))}
      </ul>
      <button className={styles["link-btn"]}>
        <a
          className={styles["link"]}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Open Recipe Details
        </a>
      </button>
    </div>
  );
};


export default Recipe;
