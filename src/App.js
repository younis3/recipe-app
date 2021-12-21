import './App.css';
import { useEffect, useState } from 'react';
import './components/Recipe/Recipe';
import Recipe from './components/Recipe/Recipe';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      // console.log(data);
      setRecipes(data.hits);
    }
    getRecipes();
  }, [query])



  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }


  return (
    <div className="App">
      <h1 className="title">Recipe App</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text' className='search-bar' placeholder="Search recipes, for example: Chicken" onChange={updateSearch}></input>
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            // key={recipe.recipe.label + recipe.recipe.calories}
            key={Math.random() * 1000}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed()}
            ingredients={recipe.recipe.ingredients}
            imgSRC={recipe.recipe.image}
            link={recipe.recipe.url} />
        ))};
      </div>
    </div>
  );
}



export default App;
