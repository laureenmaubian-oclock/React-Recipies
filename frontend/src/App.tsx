import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeList from './components/RecipeList';
import './App.css';
import './index.css';
import ChristmasDecoration from './components/ChristmasDecoration';
import { useState, useEffect } from 'react';
import type { Recipe } from './types/recipe';

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
        <RecipeList recipes={recipes} />
      </main>

      <ChristmasDecoration />

    </div>
  );
}

export default App;