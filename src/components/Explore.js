import React from "react";
import Recipe from "../components/Recipe";
import styles from "../styles/Recipes.module.css";

const Explore = ({ recipes }) => {
  return (
    <div className={styles.recipes}>
      {recipes.map((recipe) => (
        <Recipe
          key={Math.random() * 1000}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories.toFixed()}
          ingredients={recipe.recipe.ingredients}
          imgSRC={recipe.recipe.image}
          link={recipe.recipe.url}
        />
      ))}
      ;
    </div>
  );
};

export default Explore;
