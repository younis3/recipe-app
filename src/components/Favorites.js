import React from "react";
import Recipe from "./Recipe";
import styles from "../styles/Recipes.module.css";

const Favorites = ({ favorites, setFavorites }) => {


  return (
    <div>
      <div className={styles.recipes}>
        {favorites.map((recipe) => (
          <Recipe
            key={Math.random() * 1000}
            title={recipe.title}
            calories={recipe.calories}
            ingredients={recipe.ingredients}
            imgSRC={recipe.imgSRC}
            link={recipe.link}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
        ;
      </div>
    </div>
  );
};


export default Favorites;
