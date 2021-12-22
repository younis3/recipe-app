import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Favorites from "./components/Favorites";
import Nav from "./components/Nav";
import Explore from "./components/Explore";
import NotFound from "./components/NotFound";

function App() {

  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);


  //get items from local storage
  useEffect(() => {
    //get fav list
    if (localStorage.getItem('recipeFavList') === null) {
      setFavorites([]);
      localStorage.setItem('recipeFavList', JSON.stringify([]));
    } else {
      setFavorites(JSON.parse(localStorage.getItem('recipeFavList')));
    }
  }, []);


  //save items to local storage
  useEffect(() => {
    //save fav list
    localStorage.setItem('recipeFavList', JSON.stringify(favorites));
  }, [favorites]);


  return (
    <Router>
      <div className="App">
        <Nav favorites={favorites} />
        <Routes>
          <Route
            path="/"
            element={
              <Explore
                recipes={recipes}
                setRecipes={setRecipes}
                favorites={favorites}
                setFavorites={setFavorites}
                query={query}
                setQuery={setQuery}
              />
            }
          />
          <Route
            path="/explore"
            element={
              <Explore
                recipes={recipes}
                setRecipes={setRecipes}
                favorites={favorites}
                setFavorites={setFavorites}
                query={query}
                setQuery={setQuery}
              />
            }
          />
          <Route path="/favorites" element={<Favorites
            favorites={favorites}
            setFavorites={setFavorites} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
