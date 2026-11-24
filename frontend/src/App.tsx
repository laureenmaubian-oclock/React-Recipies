import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeList from './components/RecipeList';
import './App.css';
import './index.css';
import ChristmasDecoration from './components/ChristmasDecoration';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header />
        <RecipeList />
      </main>

      <ChristmasDecoration />

    </div>
  );
}

export default App;