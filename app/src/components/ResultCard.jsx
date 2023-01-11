import React from "react";

const ResultCard = ({result}) => {
  // console.log(result.imageLinks);
  const image = result.imageLinks === undefined ? '' : result.imageLinks.thumbnail;
  // const authorStr = result.authors.map(author => `${author} `);
  console.log(result.authors);
  return(
    <div>
      <img src={image} alt={result.title} />
      <h3>
        { result.title }
      </h3>
      <h4>
        {/* {authorStr} */}
      </h4>
    </div>
  )
}

export default ResultCard;
