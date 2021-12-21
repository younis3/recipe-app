import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import Favorites from './components/Favorites';
import Nav from './components/Nav';
import Search from './components/Search';
import Explore from './components/Explore';

function App() {

  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      // console.log(data);
      setRecipes(data.hits);
    }
    getRecipes();
  }, [query])


  return (
    <div className="App">
      <h2 className="title">Recipe App</h2>
      <Nav />
      <Search setQuery={setQuery} />
      <Explore recipes={recipes} />
    </div>
  );
}


export default App;
