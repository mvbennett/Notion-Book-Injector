import './App.css';
// import search from './myApp';
import Search from './components/Search';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState();
  const search = (book) => {
    fetch(`http://localhost:4000/search/${book}`)
    .then(response => response.json())
    .then(data => setResults(data));
  }
  search('pachinko');
  // console.log(results);
  const parsedResults = [];
  if (typeof results === 'object') {
    results.forEach(element => {
      parsedResults.push(
        {
          title: element.volumeInfo.title
        }
      );
    });
  }
  console.log(parsedResults);
  return (
    <div className="App">
      <h1>Notion Book Injector</h1>
      <Search />
      <Results />
      {parsedResults === undefined ? <div /> : parsedResults.forEach(element => {
        return <div key={element.title}><h2>{element.title}</h2></div>
      })}
    </div>
  );
}

export default App;
