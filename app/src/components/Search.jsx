import React from "react";

const Search = () => {
  return(
    <div>
      <form action="post">
        <input type="text" value="Type a book title or author name here" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
