import React, { useEffect, useState } from "react";
import Recipe from "../components/Recipe";
import Search from "../components/Search";
import styles from "../styles/Recipes.module.css";

const Explore = ({ recipes, setRecipes }) => {
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      // console.log(data);
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  return (
    <div>
      <Search setQuery={setQuery} />
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
    </div>
  );
};

export default Explore;
