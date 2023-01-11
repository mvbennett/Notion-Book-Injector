import React from "react";

const ResultCard = ({result}) => {
  // console.log(result.imageLinks);
  const image = result.imageLinks === undefined ? '' : result.imageLinks.thumbnail;
  const authorStr = result.authors.join(' & ');
  // console.log(result.description);
  const description = result.description.length > 240 ? `${result.description.substring(0, 240)}...` : result.description;
  return(
    <div className="result-card">
      <img src={image} alt={result.title} />
      <h3>
        { result.title }
      </h3>
      <h4>
        {authorStr}
      </h4>
      <p>
        {description}
      </p>
      <div className="page-count">
        {`${result.pageCount} pages`}
      </div>
      <button>
        Save CSV
      </button>
    </div>
  )
}

export default ResultCard;
