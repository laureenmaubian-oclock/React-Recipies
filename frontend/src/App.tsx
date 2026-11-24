import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeList from './components/RecipeList';
import './App.css';
import './index.css';
import ChristmasDecoration from './components/ChristmasDecoration';
import { useState, useEffect } from 'react';
import type { Recipe } from './types/recipe';
import { Routes, Route } from 'react-router';
import RecipePage from './components/RecipePage';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="app">
      <Sidebar recipes={recipes} />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:slug" element={<RecipePage recipes={recipes} />} />
        </Routes>
      </main>

      <ChristmasDecoration />

    </div>
  );
}

export default App;