import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;