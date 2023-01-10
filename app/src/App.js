import './App.css';
// import search from './myApp';
import Search from './components/Search';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState();
  const [query, setQuery] = useState();
  const search = async (book) => {
    fetch(`http://localhost:5000/test/${book}`)
    .then(response => response.json())
    .then(data => setResults(data));
  }
  // search('pachinko');
  // console.log(results);
  // const parsedResults = [];
  // if (typeof results === 'object') {
  //   results.forEach(element => {
  //     parsedResults.push(
  //       {
  //         title: element.volumeInfo.title
  //       }
  //     );
  //   });
  // }
  // console.log(parsedResults);
  return (
    <div className="App">
      <h1>Notion Book Injector</h1>
      <Search search={search} setQuery={setQuery} />
      <Results results={results}/>
      <h2>{query}</h2>
    </div>
  );
}

export default App;
