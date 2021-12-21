import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Favorites from "./components/Favorites";
import Nav from "./components/Nav";
import Explore from "./components/Explore";
import NotFound from "./components/NotFound";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Explore recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route
            path="/explore"
            element={<Explore recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
