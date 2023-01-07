import './App.css';
import Search from './components/Search';
import Results from './components/Results';

function App() {

  return (
    <div className="App">
      <h1>Notion Book Injector</h1>
      <Search />
      <Results />
    </div>
  );
}

export default App;
