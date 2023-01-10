import React from "react";
import { useState } from "react";

const Search = ({search, setQuery}) => {
  // const [query, setQuery] = useState();
  const [input, setInput] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    search(input)
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setInput(e.target.value)} placeholder="Type a book title or author name here" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
