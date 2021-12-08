import './App.css';
import { useEffect, useState } from 'react';
import './components/Recipe/Recipe';
import Recipe from './components/Recipe/Recipe';

function App() {

  const APP_ID = '1ffe52df';
  const API_KEY = 'bfacaf593405da8d5d9dc4fb31a6a09f	';


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text' className='search-bar' onChange={updateSearch}></input>
        <button type='submit' className='search-button'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label + recipe.recipe.calories}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories.toFixed(2)}
          ingredients={recipe.recipe.ingredients}
          imgSRC={recipe.recipe.image} />
      ))};

    </div>
  );
}



export default App;
