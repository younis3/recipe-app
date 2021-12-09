import './App.css';
import { useEffect, useState } from 'react';
import './components/Recipe/Recipe';
import Recipe from './components/Recipe/Recipe';

function App() {


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`);
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
    document.getElementById("input").focus();
  }

  return (
    <div className="App">
      <h1 className="title">Recipe App</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text' className='search-bar' id="input" placeholder="Search recipes, for exanple: Chicken" onChange={updateSearch}></input>
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label + recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed(2)}
            ingredients={recipe.recipe.ingredients}
            imgSRC={recipe.recipe.image}
            link={recipe.recipe.url} />
        ))};
      </div>
    </div>
  );
}



export default App;
