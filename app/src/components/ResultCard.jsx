import React from "react";

const ResultCard = ({title, img, description}) => {
  return(
    <div>
      <img src={img} alt={title} />
      <h3>
        { title }
      </h3>
      <p>
        {description}
      </p>
    </div>
  )
}

export default ResultCard;
