import React from "react";
import ResultCard from "./ResultCard";

const Results = ({results}) => {
  return(
    <div>
      <h2>Here are your results:</h2>
      {results.map(result => {
        return <ResultCard result={result} key={result.title} />
      })}
    </div>
  );
};

export default Results;
