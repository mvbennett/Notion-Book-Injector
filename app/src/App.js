import './App.css';
// import search from './myApp';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  const search = (book) => {
    fetch(`http://localhost:4000/search/${book}`)
    .then(response => response.json())
    .then(data => console.log(data));
  }
  const exampleBook = search('pachinko');
  return (
    <div className="App">
      <h1>Notion Book Injector</h1>
      <Search />
      <Results />
      {exampleBook}
    </div>
  );
}

export default App;
