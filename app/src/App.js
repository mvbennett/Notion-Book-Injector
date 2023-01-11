import './App.css';
// import search from './myApp';
import Search from './components/Search';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  // const [query, setQuery] = useState();
  const search = async (book) => {
    const response = await fetch(`http://localhost:5000/search/${book}`);
    const data = await response.json();
    return data;
  }
  console.log(results);
  results.forEach(result => console.log(result.title));
  // results === undefined ? console.log('no results yet') : console.log(results);
  return (
    <div className="App">
      <h1>Notion Book Injector</h1>
      <Search search={search} setResults={setResults} />
      <h2>Here are your results:</h2>
      <Results results={results}/>
      {results.forEach(result => {
        return <h2>{result.title}</h2>
      })}
    </div>
  );
}

export default App;
