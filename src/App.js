import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const APP_ID = '1ffe52df';
  const API_KEY = 'bfacaf593405da8d5d9dc4fb31a6a09f	';


  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await res.json();
    console.log(data);
  }


  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className='search-form'>
        <input type='text' className='search-bar'></input>
        <button type='submit' className='search-button'>Search</button>
      </form>
    </div>
  );
}



export default App;
